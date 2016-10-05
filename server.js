var webpack = require(‘webpack’);
var WebpackDevServer = require(‘webpack-dev-server’);
var express = require(‘express’);
var graphqlHTTP = require(‘express-graphql’);
var graphql = require(‘graphql’);
var GraphQLSchema = graphql.GraphQLSchema;
var GraphQLObjectType = graphql.GraphQLObjectType;
var GraphQLString = graphql.GraphQLString;
var GraphQLInt = graphql.GraphQLInt;

var goldbergs = {
 1: {
   character: "Beverly Goldberg",
   actor: "Wendi McLendon-Covey",
   role: "matriarch",
   traits: "embarrassing, overprotective",
   id: 1
 },
 2: {
   character: "Murray Goldberg",
   actor: "Jeff Garlin",
   role: "patriarch",
   traits: "gruff, lazy",
   id: 2
 },
 3: {
   character: "Erica Goldberg",
   actor: "Hayley Orrantia",
   role: "oldest child",
   traits: "rebellious, nonchalant",
   id: 3
 },
 4: {
   character: "Barry Goldberg",
   actor: "Troy Gentile",
   role: "middle child",
   traits: "dim-witted, untalented",
   id: 4
 },
 5: {
   character: "Adam Goldberg",
   actor: "Sean Giambrone",
   role: "youngest child",
   traits: "geeky, pop-culture obsessed",
   id: 5
 },
 6: {
   character: "Albert 'Pops' Solomon",
   actor: "George Segal",
   role: "grandfather",
   traits: "goofy, laid back",
   id: 6
 }
}
