const puppeteer = require('puppeteer');
const { startServer } = require('polyserve');
const path = require('path');
const fs = require('fs');
const baselineDir = `${process.cwd()}/test/integration/screenshots-baseline`;

describe('🎁 regenerate screenshots', function() {
    let polyserve, browser, page;

    before(async function() {
        polyserve = await startServer({
            port: 4444,
            root: path.join(__dirname, '../../..'),
            moduleResolution: 'node'
        });

        // Create the test directory if needed.
        if (!fs.existsSync(baselineDir)) {
            fs.mkdirSync(baselineDir);
        }
        // And it's subdirectories.
        if (!fs.existsSync(`${baselineDir}/wide`)) {
            fs.mkdirSync(`${baselineDir}/wide`);
        }
        if (!fs.existsSync(`${baselineDir}/narrow`)) {
            fs.mkdirSync(`${baselineDir}/narrow`);
        }
    });

    after(done => polyserve.close(done));

    beforeEach(async function() {
        browser = await puppeteer.launch();
        page = await browser.newPage();
    });

    afterEach(() => browser.close());

    it('did it', async function() {
        return generateBaselineScreenshots(page);
    });
});

async function generateBaselineScreenshots(page) {
    const breakpoints = [
        { width: 800, height: 600 },
        { width: 375, height: 667 }
    ];
    const prefixes = ['wide', 'narrow'];
    const pages = ['welcome', 'counter', 'shoppingCart'];

    for (let i = 0; i < prefixes.length; i++) {
        const prefix = prefixes[i];
        console.log(prefix + '...');
        page.setViewport(breakpoints[i]);
        // Root.
        await page.goto('http://127.0.0.1:4444/');
        await page.screenshot({ path: `${baselineDir}/${prefix}/root.png` });
        // Pages.
        for (let i = 1; i <= pages.length; i++) {
            await page.goto(`http://127.0.0.1:4444/${pages[i]}`);
            await page.screenshot({
                path: `${baselineDir}/${prefix}/${pages[i]}.png`
            });
        }
        // 404.
        await page.goto('http://127.0.0.1:4444/404');
        await page.screenshot({
            path: `${baselineDir}/${prefix}/404.png`
        });
    }
}
