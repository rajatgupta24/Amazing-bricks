const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");
const gql = require("graphql-tag");
require("dotenv").config();

const Post = require("./models/Post");

const typeDefs = gql`
    type Post{
        id: ID!
        body: String!
        username: String!
        createdAt: String!
    },
    type Query{
        getPosts: [Post]
    }
`;

const resolvers = {
    Query: {
        async getPosts() {
            try {
                const posts = await Post.find({});
                return posts;
            } catch (error) {
                throw new Error(err);
            }
        }
    },
}

const server = new ApolloServer({
    typeDefs,
    resolvers
});

mongoose.connect( `${process.env.MONGO_URI}`, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("DB Connected")
        return server.listen({ port: 5000 })
    })
    .then((res) => {
        console.log(`Server is running on PORT: ${res.url}`);
    })
    .catch((err) => {
        console.log(err)
        console.log(`${process.env.MONGO_URI}`)
    }); 