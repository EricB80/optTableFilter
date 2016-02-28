# optTableFilter
A simple jquery plugin for filtering tables with <select> dropdowns.

Uses the ID attribute of the dropdown, and filters with the matching data-col attribute on <td>

exmaple:
<select id="foo">
  <option value="The Thing">The Thing</option>
filters table rows based on:
<td data-col="foo">The Thing</td>


