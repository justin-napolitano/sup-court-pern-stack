export const batchUsers = async (keys, models) => {
  const users = await models.User.findAll({
    where: {
      id: {
        [models.Sequelize.Op.in]: keys,
      },
    },
  });

  return keys.map(key => users.find(user => user.id === key));
};
