$(() => {
  console.log('workoddio');

  $button = $('button');

  $button.on('click', (e) => {
    console.log( $(e.target).text() );
    // if ($(e.target).text()==='No') {
    //   location.href = 'http://localhost:3000/buche';
    // }
  })
})
