For normal graphql query we have access to props.data, for mutation we have access to props.mutate

this.props.mutate is a promise

Mutation doesn't automatically refetch data => `refetchQuereries: [{ query }]`
Can use `this.props.data.refetch()` if the component knows about the query

Doesnt need to make new queries, can just modify existing ones

Apollo doesn't know if a piece of data related to the component => doesnt refetch
