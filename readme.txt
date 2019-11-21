Introduction
------------
This project allows you to create a hierarchy tree diagram on SAS Visual Analytics using data-driven content object.


Requirements
------------
Required to host the source files on a server.
Could use github as well.


Usage
-----
1. Host the source files to a web server [IMPORTANT]
OR: use https://ivyorca.github.io/Tree_Hierarchy_sas/tree_diagram.html as the url

2. On SAS VA, drag and drop the data-driven content object from the objects pane to the canvas. 

3. Add the url of the tree_diagram.html in the object's options pane.

4. Under roles, add the data items :id, p_id & value


Contents
--------
Sample Dataset 
-> Contains sample dataset
-> Columns:
	-> id:childID
	-> p_id:parentID
	-> value:parent to child value


Tree_Hierarchy_sas [sourcefiles]
-> css	: contains required css files
-> js	: contains required js files
	->nouislider.js	: js file for range slider
	->tree.js	: to load sas data and render hierarchy tree diagram on SAS
-> sas_util : contains required sas files to render js in VA
-> tree_diagram.html	: html file 






