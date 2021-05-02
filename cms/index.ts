import pages from './collections/pages'
import paintings from './collections/paintings'
import cards from './collections/cards'

export default {
  backend: {
    name: 'git-gateway',
    branch: 'main',
  },
  local_backend: true,
  load_config_file: false,
  media_folder: 'public/images',
  public_folder: 'images',

  collections: [pages, paintings, cards],
}
