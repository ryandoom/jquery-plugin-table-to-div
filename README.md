# Jquery plugin to convert tabular data into divs

This plugin was developed to convert tabular output into divs for more control of style and layout.  In a popular CMS we use it's easy to write custom SQL to pull data out of the database and render it in a table. It's a lot more work to try and query that data and then output that data in a more usable format that can be styled.

This is a quick little way to just convert the table.

## Usage

`<script type="text/javascript">`
  `jQuery(function() {`
    `$(".my_table").table_to_div({prefix:'dude',target:'#place_converted_data_should_go'});`
  `});`
`</script>`
