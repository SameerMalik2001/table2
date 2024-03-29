let tab_selected = 'posts';
let data;
$(document).ready(() => {
  let sidebarElement = ['posts', 'comments', 'albums', 'photos', 'todos', 'users']

  const addDataInUI = (data) => {
    console.log(tab_selected, data);
    if (tab_selected === 'posts') {
      $('table tbody').remove()
      let htmls = ``
      data.forEach(post => {
        htmls +=`
          <tr>
            <td>${post.userId}</td>
            <td>${post.id}</td>
            <td>${post.title}</td>
            <td>${post.body}</td>
          </tr>
        `
      })
      $('table').append('<tbody>')
      $('table tbody').append(htmls)
    } else if (tab_selected === 'comments') {
      $('table tbody').remove()
      let htmls = ``
      data.forEach(comment => {
        htmls +=`
          <tr>
            <td>${comment.postId}</td>
            <td>${comment.id}</td>
            <td>${comment.name}</td>
            <td>${comment.email}</td>
            <td>${comment.body}</td>
          </tr>
        `
      })
      $('table').append('<tbody>')
      $('table tbody').append(htmls)
    } else if (tab_selected === 'albums') {
      $('table tbody').remove()
      let htmls = ``
      data.forEach(album => {
        htmls +=`
          <tr>
            <td>${album.userId}</td>
            <td>${album.id}</td>
            <td>${album.title}</td>
          </tr>
        `
      })
      $('table').append('<tbody>')
      $('table tbody').append(htmls)
    } else if (tab_selected === 'todos') {
      $('table tbody').remove()
      let htmls = ``
      data.forEach(todo => {
        htmls +=`
          <tr>
            <td>${todo.userId}</td>
            <td>${todo.id}</td>
            <td>${todo.title}</td>
            <td>${todo.completed}</td>
          </tr>
        `
      })
      $('table').append('<tbody>')
      $('table tbody').append(htmls)
    } else if (tab_selected === 'users') {
      $('table tbody').remove()
      let htmls = ``
      data.forEach(user => {
        htmls +=`
          <tr>
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.userId}</td>
            <td>${user.email}</td>
            <td>${user.website}</td>
            <td>${user.address.city}</td>
          </tr>
        `
      })
      $('table').append('<tbody>')
      $('table tbody').append(htmls)
    } else if (tab_selected === 'photos') {
      $('table tbody').remove()
      let htmls = ``
      data.forEach(photo => {
        htmls +=`
          <tr>
            <td>${photo.albumId}</td>
            <td>${photo.id}</td>
            <td>${photo.title}</td>
            <td>${photo.url}</td>
            <td>${photo.thumbnailUrl}</td>
          </tr>
        `
      })
      $('table').append('<tbody>')
      $('table tbody').append(htmls)
    } 
  }

  const fetchingDataFromAPI = async (tab_selected) => {
    let data = null;
    await axios.get(`https://jsonplaceholder.typicode.com/${tab_selected}`)
    .then(response => data = response.data)
    addDataInUI(data)

  }

  // initially fetching data for posts at first page
  $('thead').append(`
  <tr>
    <th>UserId</th>
    <th>Id</th>
    <th>title</th>
    <th>body</th>
  </tr>
  `)
  fetchingDataFromAPI(tab_selected);
  


  for (let i = 0; i < sidebarElement.length; i++) {
    $("."+sidebarElement[i]).on('click', ()=>{
      tab_selected = sidebarElement[i];
      $('.content p').text(sidebarElement[i].toUpperCase());

      if(tab_selected === 'posts') {
        $('thead tr').remove()
        $('thead').append(`
        <tr>
          <th>UserId</th>
          <th>Id</th>
          <th>title</th>
          <th>body</th>
        </tr>
        `)
        data = fetchingDataFromAPI(tab_selected);
      } else if(tab_selected === 'comments') {
        $('thead tr').remove()
        $('thead').append(`
        <tr>
          <th>PostId</th>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Body</th>
        </tr>
        `)
        data = fetchingDataFromAPI(tab_selected);
      } else if(tab_selected === 'albums') {
        $('thead tr').remove()
        $('thead').append(`
        <tr>
          <th>UserId</th>
          <th>Id</th>
          <th>Title</th>
        </tr>
        `)
        data = fetchingDataFromAPI(tab_selected);
      } else if(tab_selected === 'photos') {
        $('thead tr').remove()
        $('thead').append(`
        <tr>
          <th>albumId</th>
          <th>Id</th>
          <th>Title</th>
          <th>Url</th>
          <th>ThumbnailUrl</th>
        </tr>
        `)
        data = fetchingDataFromAPI(tab_selected);
      } else if(tab_selected === 'todos') {
        $('thead tr').remove()
        $('thead').append(`
        <tr>
          <th>UserId</th>
          <th>Id</th>
          <th>Title</th>
          <th>Completed</th>
        </tr>
        `)
        data = fetchingDataFromAPI(tab_selected);
      } else if(tab_selected === 'users') {
        $('thead tr').remove()
        $('thead').append(`
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>UserId</th>
          <th>Email</th>
          <th>Website</th>
          <th>City</th>
        </tr>
        `)
        data = fetchingDataFromAPI(tab_selected);
      }

    })
  }

})


// if(tab_selected === 'posts') {
//   $('thead').append(`
//   <tr>
//     <th>UserId</th>
//     <th>Id</th>
//     <th>title</th>
//     <th>body</th>
//   </tr>
//   `)
// }