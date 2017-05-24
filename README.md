# SVG Pie Chart Generator
[Demo here](https://dariuszignaciuk.github.io/piechartt/ "piechart demo")
#### Create SVG Pie Chart with few lines of code.

***
### All you need to do in your Index.html file:


- Inside `<head>` add downloaded script: 
```
<head>
<script src="pieChartGenerator.js"></script>
</head>
```

- Create div or span with following data attributes:
```
 <span class="pie-chart" data-radius="30" data-labels="Item 1, Item 2, Item 3" data-values="33.3, 33.3, 33.3" data-colors="#F15351, #F1C951, #2D83BE" data-title="Chart 1"></span>
```
## Each data attribute explanation:

- `class="pie-chart"` - Set class of your element to `pie-chart`.
- `data-radius="30"` - Set radius of your chart.
- ` data-labels="Item 1, Item 2, Item 3"` - Define labels for your chart (comma separated). You can add as many as you want.
- `data-values="33.3, 33.3, 33.3"` - Define percentage values for your labels (comma separated). Remember to check if sum is 100%.
- `data-colors="#F15351, #F1C951, #2D83BE"` - Define colors for your labels (comma separated).
- `data-title="Chart 2"` - Set Title for your chart.
 
