import ApolloClient from 'apollo-boost';

let client = new ApolloClient({ //sobre service en otro archivo
    uri: "https://rickandmortyapi.com/graphql"
});

export default client;