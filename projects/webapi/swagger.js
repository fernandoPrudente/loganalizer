const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'Logger Analizer',
        description: 'Analise os logs de aplicação aqui',
        version: '1.0.0',
        contact: {
            email: 'fernandosotam@gmail.com'
        }
    },
    host: "http://localhost:5000",
      "schemes": [
        "http",
        "https"
      ],
      "consumes": [
        "application/json"
      ],
      "produces": [
        "application/json"
      ],      
    components: {
        securitySchemes: {
            bearerAuth: {
                type: 'http',
                scheme: 'bearer',
                bearerFormat: 'JWT',
            }
        }
    },
    security: [{
        bearerAuth: []
    }],
    paths: {
        "/auth": {
            "post": {
                summary: "user authenticate",
                consumers: [
                    "application/json"
                ],
                produces: [
                    "application/json"
                ],
                parameters: [
                    {
                      in: "body",
                      name: "",
                      description: "user account",
                      schema: {
                        "$ref": "#/definitions/User"
                      }
                    }                   
                  ],
                  responses: {
                    "401": {
                        description: "Autenticação falhou"
                    },
                    "200": {
                        type: "string"
                    }
                  }
            }
        }
    },
    definitions: {
        "User": {
            "type": "object",
            "properties": {
              "email": {
                "type": "string"
              },
              "password": {
                "type": "string"
              }
            }
          }
    }
    }

module.exports = swaggerDefinition