  
   
        $(document).ready(function () {
            var filesTable = $('#filesTable');
        var target = $('#target');

        target.on('dragover', function (e) {
            e.preventDefault();
        target.addClass('dragging');
            });

        target.on('dragleave', function (e) {
            e.preventDefault();
        target.removeClass('dragging');
            });

        target.on('drop', function (e) {
            e.preventDefault();
        target.removeClass('dragging');

        $.each(e.originalEvent.dataTransfer.files, function (index, file) {
                    var newRow = $('<tr>');

            var nameCell = $('<td>').text(file.name);
                var typeCell = $('<td>').text(file.type);
                    var sizeCell = $('<td>').text(file.size);

                        var downloadLink = $('<a>').text('Download');
                            downloadLink.attr('href', URL.createObjectURL(file));
                            downloadLink.attr('download', file.name);
                            var downloadCell = $('<td>').append(downloadLink);

                                newRow.append(nameCell);
                                newRow.append(typeCell);
                                newRow.append(sizeCell);
                                newRow.append(downloadCell);

                                filesTable.append(newRow);
                });
            });
        });
              