function removeSuccess() {
    $('.button').removeClass('success');
  }
  
  $(document).ready(function() {
    $('.button').click(function() {
      $(this).addClass('success');
      setTimeout(removeSuccess, 3000);
    });
  });
  