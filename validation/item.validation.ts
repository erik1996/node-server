import Joi from 'joi';

export const itemValidation = Joi.object().keys({
  name: Joi.string().required()
})
