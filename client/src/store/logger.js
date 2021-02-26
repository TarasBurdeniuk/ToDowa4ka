const logger = () => next => action => {
  if (process.env.NODE_ENV !== 'production') {
    const { type, payload } = action;

    console.groupCollapsed(type);
    console.log('Payload: ', payload);
    console.groupEnd();
  }

  return next(action);
}

export default logger;
