#!/usr/bin/env node
import * as telemetry from '@o2s/telemetry';
import { execSync } from 'child_process';
import cliProgress from 'cli-progress';
import { Command } from 'commander';
import { existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'fs';
import prompts from 'prompts';
import simpleGit from 'simple-git';

const program = new Command();

program
    .name('create-project')
    .description('Create a new DXP project')
    .argument('[name]', 'Name of the new project')
    .option('--directory [directory]', 'Specify the destination directory', 'my-dxp-project')
    .action(async (name, options) => {
        telemetry.sendEvent('create-dxp-app', 'create-project');
        await telemetry.flushEvents();

        const projectName = name
            ? name
            : (
                  await prompts({
                      type: 'text',
                      name: 'name',
                      message: 'Enter the name of your project',
                      initial: 'my-dxp-project',
                  })
              ).name;

        const targetDirectory = projectName || options.directory;

        const githubRepo = 'https://github.com/o2sdev/dxp-starter-kit';
        const githubBranch = 'create-dxp-app/base';

        if (existsSync(targetDirectory)) {
            console.error(
                `Directory ${targetDirectory} already exists. Please choose a different name or remove the existing directory.`,
            );
            return;
        }

        const bar = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);

        try {
            mkdirSync(targetDirectory, { recursive: true });

            console.log();
            console.log(`Cloning repository "${githubRepo}" (branch: "${githubBranch}") into "${targetDirectory}"...`);
            console.log();

            bar.start(100, 0);

            const git = simpleGit({
                progress({ progress }) {
                    bar.update(Math.round(progress));
                },
            });
            await git.clone(githubRepo, targetDirectory, ['--branch', githubBranch]);

            bar.stop();

            console.log();
            console.log();
            console.log('Organizing the project structure...');

            rmSync(`${targetDirectory}/.git`, { recursive: true });
            rmSync(`${targetDirectory}/.github`, { recursive: true });
            rmSync(`${targetDirectory}/.changeset`, { recursive: true });

            rmSync(`${targetDirectory}/vercel.json`, { recursive: true });

            // rmSync(`${targetDirectory}/apps/docs`, { recursive: true });
            rmSync(`${targetDirectory}/packages/framework`, { recursive: true });
            rmSync(`${targetDirectory}/packages/integrations`, { recursive: true });
            rmSync(`${targetDirectory}/packages/blocks`, { recursive: true });
            rmSync(`${targetDirectory}/packages/utils`, { recursive: true });
            rmSync(`${targetDirectory}/packages/cli`, { recursive: true });

            let file = readFileSync(targetDirectory + '/package-lock.json', 'utf8');
            file = removeSymLinks(file);
            writeFileSync(targetDirectory + '/package-lock.json', file);

            console.log();
            console.log(`Installing dependencies in "${targetDirectory}"...`);

            try {
                execSync('npm install', {
                    cwd: targetDirectory,
                    stdio: 'inherit',
                });
                console.log(`Dependencies installed successfully.`);
            } catch (error) {
                console.error('Error while installing dependencies:', error);
                return;
            }

            console.log();
            console.log('Project successfully created! 🎉');
            console.log(`Location: ${targetDirectory}`);
        } catch (error) {
            bar.stop();

            console.log();

            if (error instanceof Error) {
                console.error('Error while creating the project', error.message);
            } else {
                console.error('Error while creating the project');
            }
        }
    });

program.parse(process.argv);

const removeSymLinks = (file: string) => {
    // TODO: figure out how to remove symlinks in a smarter way without specifying every block here
    const names = [
        ['docs', 'apps/docs'],
        ['create-dxp-app', 'packages/cli/create-dxp-app'],
        ['framework', 'packages/framework'],

        ['utils.api-harmonization', 'packages/utils/api-harmonization'],
        ['utils.frontend', 'packages/utils/frontend'],

        ['integrations.mocked', 'packages/integrations/mocked'],
        ['integrations.strapi-cms', 'packages/integrations/strapi-cms'],
        ['integrations.redis', 'packages/integrations/redis'],

        ['blocks.bento-grid', 'packages/blocks/bento-grid'],
        ['blocks.cta-section', 'packages/blocks/cta-section'],
        ['blocks.faq', 'packages/blocks/faq'],
        ['blocks.feature-section', 'packages/blocks/feature-section'],
        ['blocks.feature-section-grid', 'packages/blocks/feature-section-grid'],
        ['blocks.hero-section', 'packages/blocks/hero-section'],
        ['blocks.media-section', 'packages/blocks/media-section'],
        ['blocks.pricing-section', 'packages/blocks/pricing-section'],
        ['blocks.quick-links', 'packages/blocks/quick-links'],
    ];

    let newFile = file;

    names.forEach(([name, path]) => {
        newFile = newFile.replaceAll(
            `
        "node_modules/@dxp/${name}": {
            "resolved": "${path}",
            "link": true
        },`,
            '',
        );
    });

    return newFile;
};
