import { ApolloLink, Observable } from 'apollo-link';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { onError } from 'apollo-link-error';

const loggerLink = new ApolloLink((operation, forward) => new Observable(observer => {
  forward(operation).subscribe({
    complete: observer.complete.bind(observer),
    error: observer.complete.bind(observer),
    next: result => {
      console.log('Log', result);
      observer.next(result);
    }
  });
}));

const link = ApolloLink.from([
  loggerLink,
  onError((error) => {
    console.error('GraphQLError', error);
  }),
  setContext((_, { headers }) => {
    return {
      headers,
    };
  }),
  createHttpLink({
    uri: 'http://127.0.0.1:8000',
  }),
]);

export default link;
