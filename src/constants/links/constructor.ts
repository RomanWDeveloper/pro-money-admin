const path = '/constructor';

const TEMPLATE = {
  path: 'templates',
  fullPath: `${path}/templates`,

  CREATE: {
    path: 'create',
    fullPath: `${path}/template/create`,
  },
};

const GROUP = {
  path: 'groups',
  fullPath: `${path}/groups`,

  CREATE: {
    path: 'create',
    fullPath: `${path}/group/create`,
  },
};

export const CONSTRUCTOR = {
    path,
    TEMPLATE,
    GROUP
};