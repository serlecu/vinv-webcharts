/**
 * Use this file for JavaScript code that you want to run in the front-end
 * on posts/pages that contain this block.
 *
 * When this file is defined as the value of the `viewScript` property
 * in `block.json` it will be enqueued on the front end of the site.
 *
 * Example:
 *
 * ```js
 * {
 *   "viewScript": "file:./view.js"
 * }
 * ```
 *
 * If you're not making any changes to this file because your project doesn't need any
 * JavaScript running in the front-end, then you should delete this file and remove
 * the `viewScript` property from `block.json`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#view-script
 */

/* eslint-disable no-console */
console.log( 'Hello World! (from create-block-vinv-webcharts block)' );
/* eslint-enable no-console */
// import Chart from 'chartjs';

const chart = new Chart(
    document.getElementById('myChart'),
    {
        type: 'line',
        data: {
            datasets: [
                {
                    label: 'Category A',
                    data: [10, 20, 30, 40],
                    // backgroundColor: [pallette['red']],
    
                },
                {
                    label: 'Category B',
                    data: [10, 40, 20, 30],
                    // backgroundColor: [pallette['greyUPV']],
                }
            ],
            labels: ['Red', 'Blue', 'Yellow', 'Green']
        },
        options:  {
            maintainAspectRatio: false,
    
            borderWidth: 1
        },
        plugins: []
});

let con = new Connection()
    .connect('connectionString');
