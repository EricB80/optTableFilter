(function ($, undefined) {
    $.fn.optionTableFilter = function (opts) {
        var opt = $.extend({
            filterList: ""
        }, opts);

        var $values = {};

        //pass object to var for later use
        var $scanTable = $(this);

        //create object of dropdown values
        function searchVals() {
            var vals = {};
            $(opt.filterList).each(function () {
                var search = $(this).attr('id');
                var val = $(this).val();
                vals[search] = val;
            });
            return vals;
        }
        //loose scan for object equality
        function isEqual(obj1, obj2) {
            var i = 0;
            $.each(obj1, function (key, value) {
                if (obj2[key] == value || value == 'all') {
                    i++;
                }
            });
            var target = Object.keys(obj1).length;
            return i === target;
        }

        function hideRows(searchFor) {
            $scanTable.find('tbody tr').each(function () {
                var cellVals = {};
                var row = $(this);
                //create object based on data-col
                $.each(searchFor, function (k, v) {
                    var cell = $(row).find('[data-col="' + k + '"]');
                    var v = cell.text();
                    cellVals[k] = v;
                });
                var found = isEqual(searchFor, cellVals) ? row.show() : row.hide();
            });
        }

        //attach event handlers to dropdowns
        $(opt.filterList).on('change', function () {
            $values = searchVals();
            hideRows($values);
        });
    };
})(jQuery);


