$(document).ready(function() {
    $('#myTable').DataTable();
  });

  $(document).ready(function() {
    $('#myTable').DataTable({
      "pagingType": "full_numbers",
      "pageLength": 10
    });
  });