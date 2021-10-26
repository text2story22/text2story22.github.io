import React, {useState} from 'https://cdn.skypack.dev/react';
import ReactDOM from 'https://cdn.skypack.dev/react-dom';
import {
    TiChevronLeftOutline,
    TiChevronRightOutline
} from 'https://cdn.skypack.dev/react-icons/ti';

const MAX_VISIBILITY = 3;

const Card = ({title, pages, content}) =>
    React.createElement("div", {className: "card"},
        React.createElement("h2", null, title),
        React.createElement("p", null, pages),
        React.createElement("p", null, content));

const Carousel = ({children}) => {
    const [active, setActive] = useState(2);
    const count = React.Children.count(children);

    return (
        React.createElement("div", {className: "carousel"},
            active > 0 && React.createElement("button", {
                className: "card_nav left",
                onClick: () => setActive(i => i - 1)
            }, React.createElement(TiChevronLeftOutline, null)),
            React.Children.map(children, (child, i) =>
                React.createElement("div", {
                        className: "card-container", style: {
                            '--active': i === active ? 1 : 0,
                            '--offset': (active - i) / 3,
                            '--abs-offset': Math.abs(active - i) / 3,
                            'pointer-events': active === i ? 'auto' : 'none',
                            'opacity': Math.abs(active - i) >= MAX_VISIBILITY ? '0' : '1',
                            'display': Math.abs(active - i) > MAX_VISIBILITY ? 'none' : 'block'
                        }
                    },

                    child)),


            active < count - 1 && React.createElement("button", {
                className: "card_nav right",
                onClick: () => setActive(i => i + 1)
            }, React.createElement(TiChevronRightOutline, null))));


};

const App = () =>
    React.createElement("div", {className: "app"},
        React.createElement(Carousel, null,
            [
                React.createElement(Card, {
                    title: "Demo and Position Papers",
                    pages: "(max 5 pages + references)",
                    content: "Demonstration of prototype and operational systems of interest to the Text2Story community."
                }),

                React.createElement(Card, {
                    title: "Project Description Papers",
                    pages: "(max 4 pages + references)",
                    content: "Track to present work in progress."
                }),

                React.createElement(Card, {
                    title: "Research Papers",
                    pages: "(max 7 pages + references)",
                    content: "Traditional full research paper concerning any topic stated above."
                }),

                React.createElement(Card, {
                    title: "Nectar Papers",
                    pages: "(max 3 pages + references)",
                    content: "A summary of own work published in other conferences or journals that is worthwhile sharing with the Text2Story community, by emphasizing how it can be applied for narrative extraction, processing or storytelling, adding some more insights or discussions; novel aspects, results or case studies."
                }),

                React.createElement(Card, {
                    title: "Negative Result Papers",
                    pages: "(max 7 pages + references)",
                    content: "Highlight tested hypotheses that did not get the expected outcome."
                }),

            ]));


ReactDOM.render(
    React.createElement(App, null),
    document.getElementById("123"));