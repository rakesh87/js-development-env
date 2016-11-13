export const schema = {
  "type": "object",
  "properties": {
    "lists": {
      "type": "array",
      "minItems": 3,
      "maxItems": 5,
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "number",
            "unique": true,
            "minimum": 1
          },
          "email": {
            "type": "string",
            "faker": "internet.email",
          },
        "position": {
            "type": "number",
            "unique": true,
            "minimum": 1
          },
        },
        required: ['id', 'email', 'position']
      }
    }
  },
  required: ['lists']
};