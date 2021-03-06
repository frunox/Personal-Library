$(document).ready(() => {
  const url = window.location.href.split('/');
  const bookName = url[url.length - 1];

  function addNote(event) {
    event.preventDefault()
    const newNote = $('#new-note').val();
    const newNoteObj = {
      note: newNote,
      bookId: $('#book-title').attr('data-book-id')
    }
    console.log('newNoteObj:  ' + JSON.stringify(newNoteObj))
    $.post('/api/book/note', newNoteObj)
      .then(response => {
        $('#new-note').val('');
        console.log(response)
        getBookNotes()
      })
      .catch(error => console.log('in bookDetail.js  ' + JSON.stringify(error)))
  }

  function deleteNote(event) {
    event.preventDefault()
    const id = $(this).attr('data-note-id');

    $.ajax({
      url: '/api/note/' + id,
      method: 'DELETE'
    }).then(response => {
      console.log(response)
      getBookNotes();
    })
      .catch(error => console.log(error))
  }

  function getBookNotes() {
    $('#notes').empty();

    $.get('/api/book/notes/' + bookName)
      .then(response => {
        for (let i = 0; i < response.length; i++) {
          const newNoteDiv = $('<li>').text(response[i].note);
          const deleteButton = $(`<span><button class="delete-note" data-note-id=${response[i].id}>X</button></span>`);
          newNoteDiv.append(deleteButton);
          $('#notes').append(newNoteDiv);
        }
      })
  }

  $.get('/api/book/' + bookName)
    .then(response => {
      const { id, firstName, lastName, title, coverPhoto, note } = response[0];

      $('#book-image').attr('src', coverPhoto);
      $('#book-title').text(title);
      $('#book-title').attr('data-book-id', id)
      $('#book-author').text(`Author: ${firstName} ${lastName}`);

      getBookNotes()
    })


  $('#submit-note').on('click', addNote);
  $(document).on('click', '.delete-note', deleteNote)
})