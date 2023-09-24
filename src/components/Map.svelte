<script lang="ts">
	import { Map, View } from 'ol';
	import TileLayer from 'ol/layer/Tile';
	import XYZ from 'ol/source/XYZ';
	import { fromLonLat } from 'ol/proj';
	import VectorLayer from 'ol/layer/Vector';
	import VectorSource from 'ol/source/Vector';
	import { Style, Stroke } from 'ol/style';
	import Polyline from 'ol/format/Polyline';
	import {theme} from '$lib/store'

	export let activities: any[];

	let map: Map | null = null;

	const mapConfig = {
		dark: {
			color: '#4f4f4f',
			width: 1,
			theme: 'https://a.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}@2x.png'
		},
		light: {
			color: '#aeabab',
			width: 1,
			theme: 'https://a.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}@2x.png'
		}
	};

	$: themeToUse = $theme === 'system' ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light') : $theme

	const setupMap = (node: HTMLDivElement, _id: string) => {
		map = new Map({
			target: 'map',
			view: new View({
				center: fromLonLat([-73.96186, 40.744545]),
				zoom: window.screen.width > 750 ? 12.75 : 12
			}),
			controls: []
		});
		map.addLayer(
			new TileLayer({
				source: new XYZ({
					url: mapConfig[themeToUse].theme,
					crossOrigin: 'anonymous'
				})
			})
		);
		map.addLayer(
			new VectorLayer({
				source: new VectorSource({
					features: activities.map((activity) =>
						new Polyline({
							factor: 1e5
						}).readFeature(activity.polyline, {
							dataProjection: 'EPSG:4326',
							featureProjection: 'EPSG:3857'
						})
					)
				}),
				style: new Style({
					stroke: new Stroke({
						color: mapConfig[themeToUse].color,
						width: mapConfig[themeToUse].width
					})
				})
			})
		);
		return {
			destroy() {
				if (map) {
					map.setTarget(undefined);
					map = null;
				}
			}
		};
	};
</script>

{#key themeToUse}
	<div id="map" use:setupMap={'map'}/>
{/key}

<style>
	#map {
		width: 100%;
		height: 100%;
		position: absolute;
		z-index: -2;
	}
</style>
