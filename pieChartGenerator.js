document.addEventListener("DOMContentLoaded", function () {
    (function () {
        var nodelist = document.querySelectorAll(".pie-chart");
        Array.prototype.forEach.call(nodelist, function (chart) {
            var offset = 0;
            var radius = chart.getAttribute(["data-radius"]);
            var value = JSON.parse("[" + chart.getAttribute(["data-values"]) + "]");
            var color = chart.getAttribute(["data-colors"]).split(", ");
            var label = chart.getAttribute(["data-labels"]).split(", ");
            var title = chart.getAttribute(["data-title"]);
            var circuit = 2 * Math.PI * radius;
            var NS = "http://www.w3.org/2000/svg";
            var svg = document.createElementNS(NS, "svg");
            var titleNode = document.createElementNS(NS, "title");
            var ul = document.createElement("ul");
            var labelTitle = document.createElement("h5");
            titleNode.textContent = title;
            chart.textContent = "";
            labelTitle.textContent = title;
            ul.setAttribute("class", "pie-chart-label-list");
            labelTitle.setAttribute("tex-decoration", "underline");
            labelTitle.style.textDecoration = "underline";
            ul.appendChild(labelTitle);
            svg.appendChild(titleNode);

            for (var i in value) {
                var circle = document.createElementNS(NS, "circle");
                circle.setAttribute("r", radius);
                circle.setAttribute("cx", radius);
                circle.setAttribute("cy", radius);
                Object.assign(circle.style, {
                    "fill": "transparent",
                    "stroke": color[i],
                    "stroke-width": (radius * 2) - 1, // with full diameter there was artifact bug in the chart center on Firefox and IE. Thats why 1 was substracted
                    "stroke-dashoffset": -offset,
                    "stroke-dasharray": (value[i] / 100) * circuit + " " + circuit
                });
                svg.appendChild(circle);
                offset += (value[i] / 100) * circuit;

                var li = document.createElement("li");
                li.textContent = label[i] + ": " + value[i] + "%";
                li.setAttribute("class", "pie-chart-label");
                Object.assign(li.style, {
                    "display": "list-item",
                    "background-color": color[i],
                    "border-radius": "4px",
                    "list-style-type": "none",
                    "text-align": "left",
                    "padding": ".1em .3em .1em .3em",
                    "box-shadow": "3px 3px 3px #888888",
                    "text-shadow": "0.05em 0 black, 0 0.05em black, -0.05em 0 black, 0 -0.05em black, -0.05em -0.05em black, -0.05em 0.05em black, 0.05em -0.05em black, 0.05em 0.05em black",
                    "margin": "0.5em",
                    "color": "white"
                });
                ul.appendChild(li);
            }
            svg.setAttribute("viewBox", "0 0 " + radius * 2 + " " + radius * 2);
            Object.assign(svg.style, {
                "width": circuit / 16 + "em",
                "height": circuit / 16 + "em",
                "transform": "rotate(-90deg)",
                "border-radius": "50%",
                "box-shadow": "-3px 3px 3px #888888"
            });
            chart.appendChild(svg);
            chart.appendChild(ul);
            Object.assign(chart.style, {
                "display": "flex",
                "margin": "1em",
                "flex-wrap": "wrap"
            });
        });
    })();
});