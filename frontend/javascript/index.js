import Bulmatown from "bulmatown"

import "index.scss"


// Import all javascript files from src/_components
const componentsContext = require.context("bridgetownComponents", true, /.js$/)
componentsContext.keys().forEach(componentsContext)

console.info("Bridgetown is loaded!")

import { webkitLineClamp } from 'webkit-line-clamp';
let items = document.getElementsByClassName('clamp-6-lines');
for (var i = 0; i < items.length; i++) {
  webkitLineClamp(items[i], 6);
}
