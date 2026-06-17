import { FusesPlugin } from '@electron-forge/plugin-fuses';
import { FuseV1Options, FuseVersion } from '@electron/fuses';

export default {
    packagerConfig: {
        asar: true,
        quiet: false,
        icon: './build/icon',
        extraResource: ['./build/icon.ico'],
        ignore: [
            /^\/src($|\/)/,
            /^\/\.git($|\/)/,
            /^\/out($|\/)/,
            /^\/public($|\/)/,
            /^\/stats($|\/)/,
            /README\.md$/,
            /node_modules\/\.vite($|\/)/,
            /^\/\.github($|\/)/,
            /^\/\.husky($|\/)/,
            /\.dockerignore$/,
            /Dockerfile$/,
            /entrypoint\.sh$/,
            /default\.conf\.template$/,
            /^\/tsconfig\./,
            /^\/vite\.config\./,
            /^\/vitest\.config\./,
            /^\/eslint\.config\./,
            /^\/postcss\.config\./,
            /^\/tailwind\.config\./,
            /^\/components\.json$/,
            /^\/\.prettierrc/,
            /^\/\.prettierignore$/,
            /^\/\.nvmrc$/,
            /^\/\.gitignore$/,
            /^\/CONTRIBUTING\.md$/,
            /^\/CODE_OF_CONDUCT\.md$/,
            /^\/CHANGELOG\.md$/,
            /^\/LICENSE$/,
            /^\/CLA\.md$/,
            /^\/electron\.d\.ts$/,
            /\/\.map$/,
        ],
    },
    rebuildConfig: {},
    makers: [
        {
            name: '@felixrieseberg/electron-forge-maker-nsis',
            config: {
                getAppBuilderConfig: () => ({
                    nsis: {
                        oneClick: false,
                        perMachine: true,
                        allowToChangeInstallationDirectory: true,
                        createDesktopShortcut: true,
                        runAfterFinish: true,
                        installerIcon: './build/icon.ico',
                        shortcutName: 'ChartDB',
                        include: './build/installer.nsh',
                        deleteAppDataOnUninstall: false,
                    },
                }),
            },
        },
        {
            name: '@electron-forge/maker-zip',
            platforms: ['win32'],
        },
    ],
    publishers: [
        {
            name: '@electron-forge/publisher-github',
            config: {
                repository: {
                    owner: 'nifra-s',
                    name: 'chartdb-desktop',
                },
                draft: false,
                prerelease: false,
            },
        },
    ],
    plugins: [
        {
            name: '@electron-forge/plugin-auto-unpack-natives',
            config: {},
        },
        new FusesPlugin({
            version: FuseVersion.V1,
            [FuseV1Options.RunAsNode]: false,
            [FuseV1Options.EnableCookieEncryption]: true,
            [FuseV1Options.EnableNodeOptionsEnvironmentVariable]: false,
            [FuseV1Options.EnableNodeCliInspectArguments]: false,
            [FuseV1Options.EnableEmbeddedAsarIntegrityValidation]: true,
            [FuseV1Options.OnlyLoadAppFromAsar]: true,
        }),
    ],
};
