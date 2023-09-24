<script lang="ts">
	import { Map, Feature, View } from 'ol';
	import TileLayer from 'ol/layer/Tile';
	import XYZ from 'ol/source/XYZ';
	import { fromLonLat } from 'ol/proj';
	import VectorLayer from 'ol/layer/Vector';
	import VectorSource from 'ol/source/Vector';
	import { Style, Stroke } from 'ol/style';
	import Polyline from 'ol/format/Polyline';

	export let activities: any[];
	export let theme: 'dark' | 'light';

	let map: Map | null = null;

	const mapConfig = {
		dark: {
			color: '#c3c3c3',
			width: 1,
			theme: 'https://a.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}@2x.png'
		},
		light: {
			color: '#000',
			width: 1,
			theme: 'https://a.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}@2x.png'
		}
	};

	const setupMap = (node: HTMLDivElement, _id: string) => {
		map = new Map({
			target: 'map',
			view: new View({
				center: fromLonLat([-73.94186, 40.724545]),
				zoom: 12
			}),
			controls: []
		});
		map.addLayer(
			new TileLayer({
				source: new XYZ({
					url: mapConfig[theme].theme,
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
						color: mapConfig[theme].color,
						width: mapConfig[theme].width
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

<div id="map" use:setupMap={'map'} />

<style>
	#map {
		width: 100%;
		height: 100%;
		position: absolute;
		z-index: -1;
	}
</style>
