export default {
  blog() {
    return {
      path: '',
      resolve: (response, mappers) => {
        // let blog = response.results[0]
        return mappers.merge({
          title: 'nei.moe ~subarashii world~',
          labels: {
            post: 'Exit reading mode',
            author: 'View all authors'
          }
        })
      }
    }
  }
}
