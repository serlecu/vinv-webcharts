/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';

import Chart from 'chart.js/auto';
import { getRelativePosition } from 'chart.js/helpers';
// import bootstrap


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

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
export default function save() {
	return (
		<div class="main" { ...useBlockProps.save() }>
			<p >
				{ 'Vinv Webcharts – hello from the saved content!' }
			</p>
			<div id="chart-wrapper" class="col-12">
				<canvas id="myChart" class=""></canvas>
			</div>
		</div>
	);
}
