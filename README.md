# Graphql and playground

## Usage

```bash
$ docker run -d -p 4000:4000 imega/graphql-playground:latest
```

1. Open URL http://localhost:4000/graphql in browser
2. Paste query in editor (left-top)

```graphql
query getBooks {
    books {
        title
        author
    }
}
```

3. Click the play button
4. The server will response

```json
{
    "data": {
        "books": [
            {
                "title": "Harry Potter and the Chamber of Secrets",
                "author": "J.K. Rowling"
            },
            {
                "title": "Jurassic Park",
                "author": "Michael Crichton"
            }
        ]
    }
}
```
