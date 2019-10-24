# REST API Boilerplate

Simple REST API Boilerplate


# Architecture

Layer architecture

*Route -> Controller -> Service -> Data -> Model* 

## Route Layer

Handles requests and applies middlewares
Also sets swagger definitions

## Controller Layer

Handles Requests and call service layer for bussines logic

## Service Layer

Business logic

## Data Layer

Methods for data access

## Model Layer

Model and schemas definitions for MySQL, MongoDB, etc.