// ==UserScript==
// @name     Open links in same tab
// @version  1
// @grant    none
// @include  *
// ==/UserScript==

// Get all <a> nodes where the target attribute is '_blank'
nodes = document.querySelectorAll("a[target='_blank']");

// Remove the target attribute of said nodes.
for (node of nodes) {
  node.removeAttribute('target');
}

