import axios from 'axios';

export default {
  user: {
    login: credentials => axios.post('/api/auth/login', {credentials}).then(res => res.data.user),

    signup: user => axios.post('/api/users/signup', {user}).then(res => res.data.user),

    // confirm: token => axios.post('/api/auth/confirmation', {token}).then(res => res.data.user),

    // resetPasswordRequest: email => axios.post('/api/auth/reset_password_request', {email}),

    // validateToken: token => axios.post('/api/auth/validate_tokne', {token}),

    // setNewPassword: (data) => axios.post('/api/auth/set_new_password', {data})
  },
  // books: {
  //   fetchAll: () => axios.get('/api/books').then(res => res.data.books),

  //   create: book => axios.post('/api/books', {book}).then(res => res.data.book),

  //   makeBookFinish: book => axios.post('/api/books/finish', {book}).then(res => res.data.book),

  //   removeBook: book => axios.post('/api/books/remove', {book}).then(res => res.data.book)
  // }
};