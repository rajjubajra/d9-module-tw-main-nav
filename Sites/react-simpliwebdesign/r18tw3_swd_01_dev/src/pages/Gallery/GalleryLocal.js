import {useEffect, useState} from 'react';
import GalleryContainer from './GalleryContainer';

// const data = [
//   {
//     "id": 1,
//     "icon": "TG",
//     "title": "Theme Gallery",
//     "url": "/theme-gallery", 
//     "urlType": "internal",
//     "text": "",
//   },
//   {
//     "id": 2,
//     "icon": "WR",
//     "title": "Web Resources",
//     "url": "/web-resources", 
//     "urlType": "internal",
//     "text": "",
//   },
//   {
//     "id": 3,
//     "icon": "BP",
//     "title": "Blog Post",
//     "url": "/blog",
//     "urlType": "internal", 
//     "text": "",
//   },
//   {
//     "id": 4,
//     "icon": "CL",
//     "title": "Clients",
//     "url": "/clients", 
//     "urlType": "internal",
//     "text": "",
//   },
//   {
//     "id": 5,
//     "icon": "RI",
//     "title": "Royalty Free Images",
//     "url": "https://themes.rdbajra.com/image-search", 
//     "urlType": "external",
//     "text": "",
//   },



// ]


const data = [ 
 /** Gallery List JSON DATA */ 
{
  "jsonapi": {
    "version": "1.0",
    "meta": {
      "links": {
        "self": {
          "href": "http://jsonapi.org/format/1.0/"
        }
      }
    }
  },
  "data": [
    {
      "type": "node--yw_gallery_list",
      "id": "7a3c960e-4c3c-4b77-9c5e-86ba2e2fb35c",
      "links": {
        "describedby": {
          "href": "https://dev.yellow-website.com/yw-d9/jsonapi/node/yw_gallery_list/resource/schema"
        },
        "self": {
          "href": "https://dev.yellow-website.com/yw-d9/jsonapi/node/yw_gallery_list/7a3c960e-4c3c-4b77-9c5e-86ba2e2fb35c?resourceVersion=id%3A313"
        }
      },
      "attributes": {
        "drupal_internal__nid": 86,
        "drupal_internal__vid": 313,
        "langcode": "en",
        "revision_timestamp": "2022-04-16T09:09:51+00:00",
        "revision_log": null,
        "status": true,
        "title": "Free Images",
        "created": "2022-04-15T18:18:42+00:00",
        "changed": "2022-04-16T09:09:51+00:00",
        "promote": true,
        "sticky": false,
        "default_langcode": true,
        "revision_translation_affected": true,
        "path": {
          "alias": null,
          "pid": null,
          "langcode": "en"
        },
        "field_yw_gallery_list_brief": null,
        "field_yw_gallery_list_title": "Free Images",
        "field_yw_gallery_list_url": {
          "uri": "https://themes.rdbajra.com/image-search/",
          "title": "Royalty Free Images",
          "options": [
            
          ]
        }
      },
      "relationships": {
        "node_type": {
          "data": {
            "type": "node_type--node_type",
            "id": "6937e1bb-a822-4153-a210-f6c3bb32594a",
            "meta": {
              "drupal_internal__target_id": "yw_gallery_list"
            }
          },
          "links": {
            "related": {
              "href": "https://dev.yellow-website.com/yw-d9/jsonapi/node/yw_gallery_list/7a3c960e-4c3c-4b77-9c5e-86ba2e2fb35c/node_type?resourceVersion=id%3A313"
            },
            "self": {
              "href": "https://dev.yellow-website.com/yw-d9/jsonapi/node/yw_gallery_list/7a3c960e-4c3c-4b77-9c5e-86ba2e2fb35c/relationships/node_type?resourceVersion=id%3A313"
            }
          }
        },
        "revision_uid": {
          "data": {
            "type": "user--user",
            "id": "98fd8b15-fbc5-4ceb-895c-49dd9c31f88e",
            "meta": {
              "drupal_internal__target_id": 1
            }
          },
          "links": {
            "related": {
              "href": "https://dev.yellow-website.com/yw-d9/jsonapi/node/yw_gallery_list/7a3c960e-4c3c-4b77-9c5e-86ba2e2fb35c/revision_uid?resourceVersion=id%3A313"
            },
            "self": {
              "href": "https://dev.yellow-website.com/yw-d9/jsonapi/node/yw_gallery_list/7a3c960e-4c3c-4b77-9c5e-86ba2e2fb35c/relationships/revision_uid?resourceVersion=id%3A313"
            }
          }
        },
        "uid": {
          "data": {
            "type": "user--user",
            "id": "98fd8b15-fbc5-4ceb-895c-49dd9c31f88e",
            "meta": {
              "drupal_internal__target_id": 1
            }
          },
          "links": {
            "related": {
              "href": "https://dev.yellow-website.com/yw-d9/jsonapi/node/yw_gallery_list/7a3c960e-4c3c-4b77-9c5e-86ba2e2fb35c/uid?resourceVersion=id%3A313"
            },
            "self": {
              "href": "https://dev.yellow-website.com/yw-d9/jsonapi/node/yw_gallery_list/7a3c960e-4c3c-4b77-9c5e-86ba2e2fb35c/relationships/uid?resourceVersion=id%3A313"
            }
          }
        },
        "field_yw_gallery_icon": {
          "data": {
            "type": "media--image",
            "id": "80976673-b0ee-444e-881d-e3b45e7c1dab",
            "meta": {
              "drupal_internal__target_id": 6
            }
          },
          "links": {
            "related": {
              "href": "https://dev.yellow-website.com/yw-d9/jsonapi/node/yw_gallery_list/7a3c960e-4c3c-4b77-9c5e-86ba2e2fb35c/field_yw_gallery_icon?resourceVersion=id%3A313"
            },
            "self": {
              "href": "https://dev.yellow-website.com/yw-d9/jsonapi/node/yw_gallery_list/7a3c960e-4c3c-4b77-9c5e-86ba2e2fb35c/relationships/field_yw_gallery_icon?resourceVersion=id%3A313"
            }
          }
        },
        "field_yw_gallery_link_type": {
          "data": {
            "type": "taxonomy_term--gallery_link_type",
            "id": "ceb8ba57-cee2-4545-bdfe-d8b88f4f548c",
            "meta": {
              "drupal_internal__target_id": 38
            }
          },
          "links": {
            "related": {
              "href": "https://dev.yellow-website.com/yw-d9/jsonapi/node/yw_gallery_list/7a3c960e-4c3c-4b77-9c5e-86ba2e2fb35c/field_yw_gallery_link_type?resourceVersion=id%3A313"
            },
            "self": {
              "href": "https://dev.yellow-website.com/yw-d9/jsonapi/node/yw_gallery_list/7a3c960e-4c3c-4b77-9c5e-86ba2e2fb35c/relationships/field_yw_gallery_link_type?resourceVersion=id%3A313"
            }
          }
        }
      }
    },
    {
      "type": "node--yw_gallery_list",
      "id": "820e63da-2137-4040-8afc-7260ba972468",
      "links": {
        "describedby": {
          "href": "https://dev.yellow-website.com/yw-d9/jsonapi/node/yw_gallery_list/resource/schema"
        },
        "self": {
          "href": "https://dev.yellow-website.com/yw-d9/jsonapi/node/yw_gallery_list/820e63da-2137-4040-8afc-7260ba972468?resourceVersion=id%3A314"
        }
      },
      "attributes": {
        "drupal_internal__nid": 85,
        "drupal_internal__vid": 314,
        "langcode": "en",
        "revision_timestamp": "2022-04-16T15:45:38+00:00",
        "revision_log": null,
        "status": true,
        "title": "Clients",
        "created": "2022-04-15T18:17:46+00:00",
        "changed": "2022-04-16T15:45:38+00:00",
        "promote": true,
        "sticky": false,
        "default_langcode": true,
        "revision_translation_affected": true,
        "path": {
          "alias": null,
          "pid": null,
          "langcode": "en"
        },
        "field_yw_gallery_list_brief": null,
        "field_yw_gallery_list_title": "Client",
        "field_yw_gallery_list_url": {
          "uri": "internal:/clients",
          "title": "Clients",
          "options": [
            
          ]
        }
      },
      "relationships": {
        "node_type": {
          "data": {
            "type": "node_type--node_type",
            "id": "6937e1bb-a822-4153-a210-f6c3bb32594a",
            "meta": {
              "drupal_internal__target_id": "yw_gallery_list"
            }
          },
          "links": {
            "related": {
              "href": "https://dev.yellow-website.com/yw-d9/jsonapi/node/yw_gallery_list/820e63da-2137-4040-8afc-7260ba972468/node_type?resourceVersion=id%3A314"
            },
            "self": {
              "href": "https://dev.yellow-website.com/yw-d9/jsonapi/node/yw_gallery_list/820e63da-2137-4040-8afc-7260ba972468/relationships/node_type?resourceVersion=id%3A314"
            }
          }
        },
        "revision_uid": {
          "data": {
            "type": "user--user",
            "id": "98fd8b15-fbc5-4ceb-895c-49dd9c31f88e",
            "meta": {
              "drupal_internal__target_id": 1
            }
          },
          "links": {
            "related": {
              "href": "https://dev.yellow-website.com/yw-d9/jsonapi/node/yw_gallery_list/820e63da-2137-4040-8afc-7260ba972468/revision_uid?resourceVersion=id%3A314"
            },
            "self": {
              "href": "https://dev.yellow-website.com/yw-d9/jsonapi/node/yw_gallery_list/820e63da-2137-4040-8afc-7260ba972468/relationships/revision_uid?resourceVersion=id%3A314"
            }
          }
        },
        "uid": {
          "data": {
            "type": "user--user",
            "id": "98fd8b15-fbc5-4ceb-895c-49dd9c31f88e",
            "meta": {
              "drupal_internal__target_id": 1
            }
          },
          "links": {
            "related": {
              "href": "https://dev.yellow-website.com/yw-d9/jsonapi/node/yw_gallery_list/820e63da-2137-4040-8afc-7260ba972468/uid?resourceVersion=id%3A314"
            },
            "self": {
              "href": "https://dev.yellow-website.com/yw-d9/jsonapi/node/yw_gallery_list/820e63da-2137-4040-8afc-7260ba972468/relationships/uid?resourceVersion=id%3A314"
            }
          }
        },
        "field_yw_gallery_icon": {
          "data": {
            "type": "media--image",
            "id": "80976673-b0ee-444e-881d-e3b45e7c1dab",
            "meta": {
              "drupal_internal__target_id": 6
            }
          },
          "links": {
            "related": {
              "href": "https://dev.yellow-website.com/yw-d9/jsonapi/node/yw_gallery_list/820e63da-2137-4040-8afc-7260ba972468/field_yw_gallery_icon?resourceVersion=id%3A314"
            },
            "self": {
              "href": "https://dev.yellow-website.com/yw-d9/jsonapi/node/yw_gallery_list/820e63da-2137-4040-8afc-7260ba972468/relationships/field_yw_gallery_icon?resourceVersion=id%3A314"
            }
          }
        },
        "field_yw_gallery_link_type": {
          "data": {
            "type": "taxonomy_term--gallery_link_type",
            "id": "ceb8ba57-cee2-4545-bdfe-d8b88f4f548c",
            "meta": {
              "drupal_internal__target_id": 38
            }
          },
          "links": {
            "related": {
              "href": "https://dev.yellow-website.com/yw-d9/jsonapi/node/yw_gallery_list/820e63da-2137-4040-8afc-7260ba972468/field_yw_gallery_link_type?resourceVersion=id%3A314"
            },
            "self": {
              "href": "https://dev.yellow-website.com/yw-d9/jsonapi/node/yw_gallery_list/820e63da-2137-4040-8afc-7260ba972468/relationships/field_yw_gallery_link_type?resourceVersion=id%3A314"
            }
          }
        }
      }
    },
    {
      "type": "node--yw_gallery_list",
      "id": "2024d507-86cf-473b-a19c-36b8516cf42d",
      "links": {
        "describedby": {
          "href": "https://dev.yellow-website.com/yw-d9/jsonapi/node/yw_gallery_list/resource/schema"
        },
        "self": {
          "href": "https://dev.yellow-website.com/yw-d9/jsonapi/node/yw_gallery_list/2024d507-86cf-473b-a19c-36b8516cf42d?resourceVersion=id%3A315"
        }
      },
      "attributes": {
        "drupal_internal__nid": 84,
        "drupal_internal__vid": 315,
        "langcode": "en",
        "revision_timestamp": "2022-04-16T15:46:04+00:00",
        "revision_log": null,
        "status": true,
        "title": "Blog Post",
        "created": "2022-04-15T18:17:13+00:00",
        "changed": "2022-04-16T15:46:04+00:00",
        "promote": true,
        "sticky": false,
        "default_langcode": true,
        "revision_translation_affected": true,
        "path": {
          "alias": null,
          "pid": null,
          "langcode": "en"
        },
        "field_yw_gallery_list_brief": null,
        "field_yw_gallery_list_title": "Blog Post",
        "field_yw_gallery_list_url": {
          "uri": "internal:/blog",
          "title": "Blog Post",
          "options": [
            
          ]
        }
      },
      "relationships": {
        "node_type": {
          "data": {
            "type": "node_type--node_type",
            "id": "6937e1bb-a822-4153-a210-f6c3bb32594a",
            "meta": {
              "drupal_internal__target_id": "yw_gallery_list"
            }
          },
          "links": {
            "related": {
              "href": "https://dev.yellow-website.com/yw-d9/jsonapi/node/yw_gallery_list/2024d507-86cf-473b-a19c-36b8516cf42d/node_type?resourceVersion=id%3A315"
            },
            "self": {
              "href": "https://dev.yellow-website.com/yw-d9/jsonapi/node/yw_gallery_list/2024d507-86cf-473b-a19c-36b8516cf42d/relationships/node_type?resourceVersion=id%3A315"
            }
          }
        },
        "revision_uid": {
          "data": {
            "type": "user--user",
            "id": "98fd8b15-fbc5-4ceb-895c-49dd9c31f88e",
            "meta": {
              "drupal_internal__target_id": 1
            }
          },
          "links": {
            "related": {
              "href": "https://dev.yellow-website.com/yw-d9/jsonapi/node/yw_gallery_list/2024d507-86cf-473b-a19c-36b8516cf42d/revision_uid?resourceVersion=id%3A315"
            },
            "self": {
              "href": "https://dev.yellow-website.com/yw-d9/jsonapi/node/yw_gallery_list/2024d507-86cf-473b-a19c-36b8516cf42d/relationships/revision_uid?resourceVersion=id%3A315"
            }
          }
        },
        "uid": {
          "data": {
            "type": "user--user",
            "id": "98fd8b15-fbc5-4ceb-895c-49dd9c31f88e",
            "meta": {
              "drupal_internal__target_id": 1
            }
          },
          "links": {
            "related": {
              "href": "https://dev.yellow-website.com/yw-d9/jsonapi/node/yw_gallery_list/2024d507-86cf-473b-a19c-36b8516cf42d/uid?resourceVersion=id%3A315"
            },
            "self": {
              "href": "https://dev.yellow-website.com/yw-d9/jsonapi/node/yw_gallery_list/2024d507-86cf-473b-a19c-36b8516cf42d/relationships/uid?resourceVersion=id%3A315"
            }
          }
        },
        "field_yw_gallery_icon": {
          "data": {
            "type": "media--image",
            "id": "80976673-b0ee-444e-881d-e3b45e7c1dab",
            "meta": {
              "drupal_internal__target_id": 6
            }
          },
          "links": {
            "related": {
              "href": "https://dev.yellow-website.com/yw-d9/jsonapi/node/yw_gallery_list/2024d507-86cf-473b-a19c-36b8516cf42d/field_yw_gallery_icon?resourceVersion=id%3A315"
            },
            "self": {
              "href": "https://dev.yellow-website.com/yw-d9/jsonapi/node/yw_gallery_list/2024d507-86cf-473b-a19c-36b8516cf42d/relationships/field_yw_gallery_icon?resourceVersion=id%3A315"
            }
          }
        },
        "field_yw_gallery_link_type": {
          "data": {
            "type": "taxonomy_term--gallery_link_type",
            "id": "0c2c9a39-5e86-40d7-91b4-af7f5514e285",
            "meta": {
              "drupal_internal__target_id": 39
            }
          },
          "links": {
            "related": {
              "href": "https://dev.yellow-website.com/yw-d9/jsonapi/node/yw_gallery_list/2024d507-86cf-473b-a19c-36b8516cf42d/field_yw_gallery_link_type?resourceVersion=id%3A315"
            },
            "self": {
              "href": "https://dev.yellow-website.com/yw-d9/jsonapi/node/yw_gallery_list/2024d507-86cf-473b-a19c-36b8516cf42d/relationships/field_yw_gallery_link_type?resourceVersion=id%3A315"
            }
          }
        }
      }
    },
    {
      "type": "node--yw_gallery_list",
      "id": "09e5a106-9740-4182-9d29-8635b9b47fca",
      "links": {
        "describedby": {
          "href": "https://dev.yellow-website.com/yw-d9/jsonapi/node/yw_gallery_list/resource/schema"
        },
        "self": {
          "href": "https://dev.yellow-website.com/yw-d9/jsonapi/node/yw_gallery_list/09e5a106-9740-4182-9d29-8635b9b47fca?resourceVersion=id%3A316"
        }
      },
      "attributes": {
        "drupal_internal__nid": 82,
        "drupal_internal__vid": 316,
        "langcode": "en",
        "revision_timestamp": "2022-04-16T15:46:28+00:00",
        "revision_log": null,
        "status": true,
        "title": "Theme Gallery",
        "created": "2022-04-15T18:13:48+00:00",
        "changed": "2022-04-16T15:46:28+00:00",
        "promote": true,
        "sticky": false,
        "default_langcode": true,
        "revision_translation_affected": true,
        "path": {
          "alias": null,
          "pid": null,
          "langcode": "en"
        },
        "field_yw_gallery_list_brief": null,
        "field_yw_gallery_list_title": "Theme Gallery",
        "field_yw_gallery_list_url": {
          "uri": "internal:/theme-gallery/37",
          "title": "Theme Gallery",
          "options": [
            
          ]
        }
      },
      "relationships": {
        "node_type": {
          "data": {
            "type": "node_type--node_type",
            "id": "6937e1bb-a822-4153-a210-f6c3bb32594a",
            "meta": {
              "drupal_internal__target_id": "yw_gallery_list"
            }
          },
          "links": {
            "related": {
              "href": "https://dev.yellow-website.com/yw-d9/jsonapi/node/yw_gallery_list/09e5a106-9740-4182-9d29-8635b9b47fca/node_type?resourceVersion=id%3A316"
            },
            "self": {
              "href": "https://dev.yellow-website.com/yw-d9/jsonapi/node/yw_gallery_list/09e5a106-9740-4182-9d29-8635b9b47fca/relationships/node_type?resourceVersion=id%3A316"
            }
          }
        },
        "revision_uid": {
          "data": {
            "type": "user--user",
            "id": "98fd8b15-fbc5-4ceb-895c-49dd9c31f88e",
            "meta": {
              "drupal_internal__target_id": 1
            }
          },
          "links": {
            "related": {
              "href": "https://dev.yellow-website.com/yw-d9/jsonapi/node/yw_gallery_list/09e5a106-9740-4182-9d29-8635b9b47fca/revision_uid?resourceVersion=id%3A316"
            },
            "self": {
              "href": "https://dev.yellow-website.com/yw-d9/jsonapi/node/yw_gallery_list/09e5a106-9740-4182-9d29-8635b9b47fca/relationships/revision_uid?resourceVersion=id%3A316"
            }
          }
        },
        "uid": {
          "data": {
            "type": "user--user",
            "id": "98fd8b15-fbc5-4ceb-895c-49dd9c31f88e",
            "meta": {
              "drupal_internal__target_id": 1
            }
          },
          "links": {
            "related": {
              "href": "https://dev.yellow-website.com/yw-d9/jsonapi/node/yw_gallery_list/09e5a106-9740-4182-9d29-8635b9b47fca/uid?resourceVersion=id%3A316"
            },
            "self": {
              "href": "https://dev.yellow-website.com/yw-d9/jsonapi/node/yw_gallery_list/09e5a106-9740-4182-9d29-8635b9b47fca/relationships/uid?resourceVersion=id%3A316"
            }
          }
        },
        "field_yw_gallery_icon": {
          "data": {
            "type": "media--image",
            "id": "80976673-b0ee-444e-881d-e3b45e7c1dab",
            "meta": {
              "drupal_internal__target_id": 6
            }
          },
          "links": {
            "related": {
              "href": "https://dev.yellow-website.com/yw-d9/jsonapi/node/yw_gallery_list/09e5a106-9740-4182-9d29-8635b9b47fca/field_yw_gallery_icon?resourceVersion=id%3A316"
            },
            "self": {
              "href": "https://dev.yellow-website.com/yw-d9/jsonapi/node/yw_gallery_list/09e5a106-9740-4182-9d29-8635b9b47fca/relationships/field_yw_gallery_icon?resourceVersion=id%3A316"
            }
          }
        },
        "field_yw_gallery_link_type": {
          "data": {
            "type": "taxonomy_term--gallery_link_type",
            "id": "ceb8ba57-cee2-4545-bdfe-d8b88f4f548c",
            "meta": {
              "drupal_internal__target_id": 38
            }
          },
          "links": {
            "related": {
              "href": "https://dev.yellow-website.com/yw-d9/jsonapi/node/yw_gallery_list/09e5a106-9740-4182-9d29-8635b9b47fca/field_yw_gallery_link_type?resourceVersion=id%3A316"
            },
            "self": {
              "href": "https://dev.yellow-website.com/yw-d9/jsonapi/node/yw_gallery_list/09e5a106-9740-4182-9d29-8635b9b47fca/relationships/field_yw_gallery_link_type?resourceVersion=id%3A316"
            }
          }
        }
      }
    },
    {
      "type": "node--yw_gallery_list",
      "id": "db1fe81b-2df5-4a86-8a7a-4252a73bb83c",
      "links": {
        "describedby": {
          "href": "https://dev.yellow-website.com/yw-d9/jsonapi/node/yw_gallery_list/resource/schema"
        },
        "self": {
          "href": "https://dev.yellow-website.com/yw-d9/jsonapi/node/yw_gallery_list/db1fe81b-2df5-4a86-8a7a-4252a73bb83c?resourceVersion=id%3A317"
        }
      },
      "attributes": {
        "drupal_internal__nid": 83,
        "drupal_internal__vid": 317,
        "langcode": "en",
        "revision_timestamp": "2022-04-16T15:46:45+00:00",
        "revision_log": null,
        "status": true,
        "title": "Web Resources",
        "created": "2022-04-15T18:15:58+00:00",
        "changed": "2022-04-16T15:46:45+00:00",
        "promote": true,
        "sticky": false,
        "default_langcode": true,
        "revision_translation_affected": true,
        "path": {
          "alias": null,
          "pid": null,
          "langcode": "en"
        },
        "field_yw_gallery_list_brief": null,
        "field_yw_gallery_list_title": "Web Resources",
        "field_yw_gallery_list_url": {
          "uri": "internal:/web-resources",
          "title": "Web Resources",
          "options": [
            
          ]
        }
      },
      "relationships": {
        "node_type": {
          "data": {
            "type": "node_type--node_type",
            "id": "6937e1bb-a822-4153-a210-f6c3bb32594a",
            "meta": {
              "drupal_internal__target_id": "yw_gallery_list"
            }
          },
          "links": {
            "related": {
              "href": "https://dev.yellow-website.com/yw-d9/jsonapi/node/yw_gallery_list/db1fe81b-2df5-4a86-8a7a-4252a73bb83c/node_type?resourceVersion=id%3A317"
            },
            "self": {
              "href": "https://dev.yellow-website.com/yw-d9/jsonapi/node/yw_gallery_list/db1fe81b-2df5-4a86-8a7a-4252a73bb83c/relationships/node_type?resourceVersion=id%3A317"
            }
          }
        },
        "revision_uid": {
          "data": {
            "type": "user--user",
            "id": "98fd8b15-fbc5-4ceb-895c-49dd9c31f88e",
            "meta": {
              "drupal_internal__target_id": 1
            }
          },
          "links": {
            "related": {
              "href": "https://dev.yellow-website.com/yw-d9/jsonapi/node/yw_gallery_list/db1fe81b-2df5-4a86-8a7a-4252a73bb83c/revision_uid?resourceVersion=id%3A317"
            },
            "self": {
              "href": "https://dev.yellow-website.com/yw-d9/jsonapi/node/yw_gallery_list/db1fe81b-2df5-4a86-8a7a-4252a73bb83c/relationships/revision_uid?resourceVersion=id%3A317"
            }
          }
        },
        "uid": {
          "data": {
            "type": "user--user",
            "id": "98fd8b15-fbc5-4ceb-895c-49dd9c31f88e",
            "meta": {
              "drupal_internal__target_id": 1
            }
          },
          "links": {
            "related": {
              "href": "https://dev.yellow-website.com/yw-d9/jsonapi/node/yw_gallery_list/db1fe81b-2df5-4a86-8a7a-4252a73bb83c/uid?resourceVersion=id%3A317"
            },
            "self": {
              "href": "https://dev.yellow-website.com/yw-d9/jsonapi/node/yw_gallery_list/db1fe81b-2df5-4a86-8a7a-4252a73bb83c/relationships/uid?resourceVersion=id%3A317"
            }
          }
        },
        "field_yw_gallery_icon": {
          "data": {
            "type": "media--image",
            "id": "80976673-b0ee-444e-881d-e3b45e7c1dab",
            "meta": {
              "drupal_internal__target_id": 6
            }
          },
          "links": {
            "related": {
              "href": "https://dev.yellow-website.com/yw-d9/jsonapi/node/yw_gallery_list/db1fe81b-2df5-4a86-8a7a-4252a73bb83c/field_yw_gallery_icon?resourceVersion=id%3A317"
            },
            "self": {
              "href": "https://dev.yellow-website.com/yw-d9/jsonapi/node/yw_gallery_list/db1fe81b-2df5-4a86-8a7a-4252a73bb83c/relationships/field_yw_gallery_icon?resourceVersion=id%3A317"
            }
          }
        },
        "field_yw_gallery_link_type": {
          "data": {
            "type": "taxonomy_term--gallery_link_type",
            "id": "ceb8ba57-cee2-4545-bdfe-d8b88f4f548c",
            "meta": {
              "drupal_internal__target_id": 38
            }
          },
          "links": {
            "related": {
              "href": "https://dev.yellow-website.com/yw-d9/jsonapi/node/yw_gallery_list/db1fe81b-2df5-4a86-8a7a-4252a73bb83c/field_yw_gallery_link_type?resourceVersion=id%3A317"
            },
            "self": {
              "href": "https://dev.yellow-website.com/yw-d9/jsonapi/node/yw_gallery_list/db1fe81b-2df5-4a86-8a7a-4252a73bb83c/relationships/field_yw_gallery_link_type?resourceVersion=id%3A317"
            }
          }
        }
      }
    }
  ],
  "included": [
    {
      "type": "media--image",
      "id": "80976673-b0ee-444e-881d-e3b45e7c1dab",
      "links": {
        "describedby": {
          "href": "https://dev.yellow-website.com/yw-d9/jsonapi/media/image/resource/schema"
        },
        "self": {
          "href": "https://dev.yellow-website.com/yw-d9/jsonapi/media/image/80976673-b0ee-444e-881d-e3b45e7c1dab?resourceVersion=id%3A6"
        }
      },
      "attributes": {
        "drupal_internal__mid": 6,
        "drupal_internal__vid": 6,
        "langcode": "en",
        "revision_created": "2022-04-16T09:09:47+00:00",
        "revision_log_message": null,
        "status": true,
        "name": "yellow-website-square150x150.png",
        "created": "2022-04-16T09:09:25+00:00",
        "changed": "2022-04-16T09:09:25+00:00",
        "default_langcode": true,
        "revision_translation_affected": true,
        "path": {
          "alias": null,
          "pid": null,
          "langcode": "en"
        }
      },
      "relationships": {
        "bundle": {
          "data": {
            "type": "media_type--media_type",
            "id": "6593d703-f1ff-4e69-80a6-ad1f9c0dc387",
            "meta": {
              "drupal_internal__target_id": "image"
            }
          },
          "links": {
            "related": {
              "href": "https://dev.yellow-website.com/yw-d9/jsonapi/media/image/80976673-b0ee-444e-881d-e3b45e7c1dab/bundle?resourceVersion=id%3A6"
            },
            "self": {
              "href": "https://dev.yellow-website.com/yw-d9/jsonapi/media/image/80976673-b0ee-444e-881d-e3b45e7c1dab/relationships/bundle?resourceVersion=id%3A6"
            }
          }
        },
        "revision_user": {
          "data": null,
          "links": {
            "related": {
              "href": "https://dev.yellow-website.com/yw-d9/jsonapi/media/image/80976673-b0ee-444e-881d-e3b45e7c1dab/revision_user?resourceVersion=id%3A6"
            },
            "self": {
              "href": "https://dev.yellow-website.com/yw-d9/jsonapi/media/image/80976673-b0ee-444e-881d-e3b45e7c1dab/relationships/revision_user?resourceVersion=id%3A6"
            }
          }
        },
        "uid": {
          "data": {
            "type": "user--user",
            "id": "98fd8b15-fbc5-4ceb-895c-49dd9c31f88e",
            "meta": {
              "drupal_internal__target_id": 1
            }
          },
          "links": {
            "related": {
              "href": "https://dev.yellow-website.com/yw-d9/jsonapi/media/image/80976673-b0ee-444e-881d-e3b45e7c1dab/uid?resourceVersion=id%3A6"
            },
            "self": {
              "href": "https://dev.yellow-website.com/yw-d9/jsonapi/media/image/80976673-b0ee-444e-881d-e3b45e7c1dab/relationships/uid?resourceVersion=id%3A6"
            }
          }
        },
        "thumbnail": {
          "data": {
            "type": "file--file",
            "id": "4c093a4e-ecfe-46cc-885b-05f641d48a88",
            "meta": {
              "alt": "Logo 150 x 150px",
              "title": null,
              "width": 150,
              "height": 150,
              "drupal_internal__target_id": 51
            }
          },
          "links": {
            "related": {
              "href": "https://dev.yellow-website.com/yw-d9/jsonapi/media/image/80976673-b0ee-444e-881d-e3b45e7c1dab/thumbnail?resourceVersion=id%3A6"
            },
            "self": {
              "href": "https://dev.yellow-website.com/yw-d9/jsonapi/media/image/80976673-b0ee-444e-881d-e3b45e7c1dab/relationships/thumbnail?resourceVersion=id%3A6"
            }
          }
        },
        "field_media_image": {
          "data": {
            "type": "file--file",
            "id": "4c093a4e-ecfe-46cc-885b-05f641d48a88",
            "meta": {
              "alt": "Logo 150 x 150px",
              "title": "",
              "width": 150,
              "height": 150,
              "drupal_internal__target_id": 51
            }
          },
          "links": {
            "related": {
              "href": "https://dev.yellow-website.com/yw-d9/jsonapi/media/image/80976673-b0ee-444e-881d-e3b45e7c1dab/field_media_image?resourceVersion=id%3A6"
            },
            "self": {
              "href": "https://dev.yellow-website.com/yw-d9/jsonapi/media/image/80976673-b0ee-444e-881d-e3b45e7c1dab/relationships/field_media_image?resourceVersion=id%3A6"
            }
          }
        }
      }
    }
  ],
  "meta": {
    "count": "5"
  },
  "links": {
    "self": {
      "href": "https://dev.yellow-website.com/yw-d9/jsonapi/node/yw_gallery_list?include=field_yw_gallery_icon"
    }
  }
}

]
/** Drupal Media Library JSON DATA */
const media = [

{
  "jsonapi": {
    "version": "1.0",
    "meta": {
      "links": {
        "self": {
          "href": "http://jsonapi.org/format/1.0/"
        }
      }
    }
  },
  "data": [
    {
      "type": "media--image",
      "id": "422cbb39-4c65-4680-86a0-35134e99229c",
      "links": {
        "describedby": {
          "href": "https://dev.yellow-website.com/yw-d9/jsonapi/media/image/resource/schema"
        },
        "self": {
          "href": "https://dev.yellow-website.com/yw-d9/jsonapi/media/image/422cbb39-4c65-4680-86a0-35134e99229c?resourceVersion=id%3A5"
        }
      },
      "attributes": {
        "drupal_internal__mid": 5,
        "drupal_internal__vid": 5,
        "langcode": "en",
        "revision_created": "2022-04-16T06:34:22+00:00",
        "revision_log_message": null,
        "status": true,
        "name": "yellow-website-square240x240.png",
        "created": "2022-04-16T06:34:01+00:00",
        "changed": "2022-04-16T06:34:01+00:00",
        "default_langcode": true,
        "revision_translation_affected": true,
        "path": {
          "alias": null,
          "pid": null,
          "langcode": "en"
        }
      },
      "relationships": {
        "bundle": {
          "data": {
            "type": "media_type--media_type",
            "id": "6593d703-f1ff-4e69-80a6-ad1f9c0dc387",
            "meta": {
              "drupal_internal__target_id": "image"
            }
          },
          "links": {
            "related": {
              "href": "https://dev.yellow-website.com/yw-d9/jsonapi/media/image/422cbb39-4c65-4680-86a0-35134e99229c/bundle?resourceVersion=id%3A5"
            },
            "self": {
              "href": "https://dev.yellow-website.com/yw-d9/jsonapi/media/image/422cbb39-4c65-4680-86a0-35134e99229c/relationships/bundle?resourceVersion=id%3A5"
            }
          }
        },
        "revision_user": {
          "data": null,
          "links": {
            "related": {
              "href": "https://dev.yellow-website.com/yw-d9/jsonapi/media/image/422cbb39-4c65-4680-86a0-35134e99229c/revision_user?resourceVersion=id%3A5"
            },
            "self": {
              "href": "https://dev.yellow-website.com/yw-d9/jsonapi/media/image/422cbb39-4c65-4680-86a0-35134e99229c/relationships/revision_user?resourceVersion=id%3A5"
            }
          }
        },
        "uid": {
          "data": {
            "type": "user--user",
            "id": "98fd8b15-fbc5-4ceb-895c-49dd9c31f88e",
            "meta": {
              "drupal_internal__target_id": 1
            }
          },
          "links": {
            "related": {
              "href": "https://dev.yellow-website.com/yw-d9/jsonapi/media/image/422cbb39-4c65-4680-86a0-35134e99229c/uid?resourceVersion=id%3A5"
            },
            "self": {
              "href": "https://dev.yellow-website.com/yw-d9/jsonapi/media/image/422cbb39-4c65-4680-86a0-35134e99229c/relationships/uid?resourceVersion=id%3A5"
            }
          }
        },
        "thumbnail": {
          "data": {
            "type": "file--file",
            "id": "038051bf-edf4-4558-979f-53ec3c75ee61",
            "meta": {
              "alt": "yellow-website logo",
              "title": null,
              "width": 240,
              "height": 240,
              "drupal_internal__target_id": 50
            }
          },
          "links": {
            "related": {
              "href": "https://dev.yellow-website.com/yw-d9/jsonapi/media/image/422cbb39-4c65-4680-86a0-35134e99229c/thumbnail?resourceVersion=id%3A5"
            },
            "self": {
              "href": "https://dev.yellow-website.com/yw-d9/jsonapi/media/image/422cbb39-4c65-4680-86a0-35134e99229c/relationships/thumbnail?resourceVersion=id%3A5"
            }
          }
        },
        "field_media_image": {
          "data": {
            "type": "file--file",
            "id": "038051bf-edf4-4558-979f-53ec3c75ee61",
            "meta": {
              "alt": "yellow-website logo",
              "title": "",
              "width": 240,
              "height": 240,
              "drupal_internal__target_id": 50
            }
          },
          "links": {
            "related": {
              "href": "https://dev.yellow-website.com/yw-d9/jsonapi/media/image/422cbb39-4c65-4680-86a0-35134e99229c/field_media_image?resourceVersion=id%3A5"
            },
            "self": {
              "href": "https://dev.yellow-website.com/yw-d9/jsonapi/media/image/422cbb39-4c65-4680-86a0-35134e99229c/relationships/field_media_image?resourceVersion=id%3A5"
            }
          }
        }
      }
    },
    {
      "type": "media--image",
      "id": "80976673-b0ee-444e-881d-e3b45e7c1dab",
      "links": {
        "describedby": {
          "href": "https://dev.yellow-website.com/yw-d9/jsonapi/media/image/resource/schema"
        },
        "self": {
          "href": "https://dev.yellow-website.com/yw-d9/jsonapi/media/image/80976673-b0ee-444e-881d-e3b45e7c1dab?resourceVersion=id%3A6"
        }
      },
      "attributes": {
        "drupal_internal__mid": 6,
        "drupal_internal__vid": 6,
        "langcode": "en",
        "revision_created": "2022-04-16T09:09:47+00:00",
        "revision_log_message": null,
        "status": true,
        "name": "yellow-website-square150x150.png",
        "created": "2022-04-16T09:09:25+00:00",
        "changed": "2022-04-16T09:09:25+00:00",
        "default_langcode": true,
        "revision_translation_affected": true,
        "path": {
          "alias": null,
          "pid": null,
          "langcode": "en"
        }
      },
      "relationships": {
        "bundle": {
          "data": {
            "type": "media_type--media_type",
            "id": "6593d703-f1ff-4e69-80a6-ad1f9c0dc387",
            "meta": {
              "drupal_internal__target_id": "image"
            }
          },
          "links": {
            "related": {
              "href": "https://dev.yellow-website.com/yw-d9/jsonapi/media/image/80976673-b0ee-444e-881d-e3b45e7c1dab/bundle?resourceVersion=id%3A6"
            },
            "self": {
              "href": "https://dev.yellow-website.com/yw-d9/jsonapi/media/image/80976673-b0ee-444e-881d-e3b45e7c1dab/relationships/bundle?resourceVersion=id%3A6"
            }
          }
        },
        "revision_user": {
          "data": null,
          "links": {
            "related": {
              "href": "https://dev.yellow-website.com/yw-d9/jsonapi/media/image/80976673-b0ee-444e-881d-e3b45e7c1dab/revision_user?resourceVersion=id%3A6"
            },
            "self": {
              "href": "https://dev.yellow-website.com/yw-d9/jsonapi/media/image/80976673-b0ee-444e-881d-e3b45e7c1dab/relationships/revision_user?resourceVersion=id%3A6"
            }
          }
        },
        "uid": {
          "data": {
            "type": "user--user",
            "id": "98fd8b15-fbc5-4ceb-895c-49dd9c31f88e",
            "meta": {
              "drupal_internal__target_id": 1
            }
          },
          "links": {
            "related": {
              "href": "https://dev.yellow-website.com/yw-d9/jsonapi/media/image/80976673-b0ee-444e-881d-e3b45e7c1dab/uid?resourceVersion=id%3A6"
            },
            "self": {
              "href": "https://dev.yellow-website.com/yw-d9/jsonapi/media/image/80976673-b0ee-444e-881d-e3b45e7c1dab/relationships/uid?resourceVersion=id%3A6"
            }
          }
        },
        "thumbnail": {
          "data": {
            "type": "file--file",
            "id": "4c093a4e-ecfe-46cc-885b-05f641d48a88",
            "meta": {
              "alt": "Logo 150 x 150px",
              "title": null,
              "width": 150,
              "height": 150,
              "drupal_internal__target_id": 51
            }
          },
          "links": {
            "related": {
              "href": "https://dev.yellow-website.com/yw-d9/jsonapi/media/image/80976673-b0ee-444e-881d-e3b45e7c1dab/thumbnail?resourceVersion=id%3A6"
            },
            "self": {
              "href": "https://dev.yellow-website.com/yw-d9/jsonapi/media/image/80976673-b0ee-444e-881d-e3b45e7c1dab/relationships/thumbnail?resourceVersion=id%3A6"
            }
          }
        },
        "field_media_image": {
          "data": {
            "type": "file--file",
            "id": "4c093a4e-ecfe-46cc-885b-05f641d48a88",
            "meta": {
              "alt": "Logo 150 x 150px",
              "title": "",
              "width": 150,
              "height": 150,
              "drupal_internal__target_id": 51
            }
          },
          "links": {
            "related": {
              "href": "https://dev.yellow-website.com/yw-d9/jsonapi/media/image/80976673-b0ee-444e-881d-e3b45e7c1dab/field_media_image?resourceVersion=id%3A6"
            },
            "self": {
              "href": "https://dev.yellow-website.com/yw-d9/jsonapi/media/image/80976673-b0ee-444e-881d-e3b45e7c1dab/relationships/field_media_image?resourceVersion=id%3A6"
            }
          }
        }
      }
    }
  ],
  "included": [
    {
      "type": "file--file",
      "id": "038051bf-edf4-4558-979f-53ec3c75ee61",
      "links": {
        "describedby": {
          "href": "https://dev.yellow-website.com/yw-d9/jsonapi/file/file/resource/schema"
        },
        "self": {
          "href": "https://dev.yellow-website.com/yw-d9/jsonapi/file/file/038051bf-edf4-4558-979f-53ec3c75ee61"
        }
      },
      "attributes": {
        "drupal_internal__fid": 50,
        "langcode": "en",
        "filename": "yellow-website-square240x240.png",
        "uri": {
          "value": "public://2022-04/yellow-website-square240x240_1.png",
          "url": "/yw-d9/sites/default/files/2022-04/yellow-website-square240x240_1.png"
        },
        "filemime": "image/png",
        "filesize": 6086,
        "status": true,
        "created": "2022-04-16T06:34:01+00:00",
        "changed": "2022-04-16T06:34:22+00:00"
      },
      "relationships": {
        "uid": {
          "data": {
            "type": "user--user",
            "id": "98fd8b15-fbc5-4ceb-895c-49dd9c31f88e",
            "meta": {
              "drupal_internal__target_id": 1
            }
          },
          "links": {
            "related": {
              "href": "https://dev.yellow-website.com/yw-d9/jsonapi/file/file/038051bf-edf4-4558-979f-53ec3c75ee61/uid"
            },
            "self": {
              "href": "https://dev.yellow-website.com/yw-d9/jsonapi/file/file/038051bf-edf4-4558-979f-53ec3c75ee61/relationships/uid"
            }
          }
        }
      }
    },
    {
      "type": "file--file",
      "id": "4c093a4e-ecfe-46cc-885b-05f641d48a88",
      "links": {
        "describedby": {
          "href": "https://dev.yellow-website.com/yw-d9/jsonapi/file/file/resource/schema"
        },
        "self": {
          "href": "https://dev.yellow-website.com/yw-d9/jsonapi/file/file/4c093a4e-ecfe-46cc-885b-05f641d48a88"
        }
      },
      "attributes": {
        "drupal_internal__fid": 51,
        "langcode": "en",
        "filename": "yellow-website-square150x150.png",
        "uri": {
          "value": "public://images/yellow-website-square150x150.png",
          "url": "/yw-d9/sites/default/files/images/yellow-website-square150x150.png"
        },
        "filemime": "image/png",
        "filesize": 3670,
        "status": true,
        "created": "2022-04-16T09:09:25+00:00",
        "changed": "2022-04-16T09:09:47+00:00"
      },
      "relationships": {
        "uid": {
          "data": {
            "type": "user--user",
            "id": "98fd8b15-fbc5-4ceb-895c-49dd9c31f88e",
            "meta": {
              "drupal_internal__target_id": 1
            }
          },
          "links": {
            "related": {
              "href": "https://dev.yellow-website.com/yw-d9/jsonapi/file/file/4c093a4e-ecfe-46cc-885b-05f641d48a88/uid"
            },
            "self": {
              "href": "https://dev.yellow-website.com/yw-d9/jsonapi/file/file/4c093a4e-ecfe-46cc-885b-05f641d48a88/relationships/uid"
            }
          }
        }
      }
    }
  ],
  "meta": {
    "count": "2"
  },
  "links": {
    "self": {
      "href": "https://dev.yellow-website.com/yw-d9/jsonapi/media/image?include=field_media_image"
    }
  }
}
]


//console.log("Gallery List",data)
//console.log("IMAGE MEDIA",media);




function GalleryLocal() {

  /** Data Array */
  const [glData, setGlData] = useState([]);
  //console.log("Gallery Listing", glData);
  

  useEffect(()=>{

    /** empty array for push data */
    const arr = [];

    /** Drupal Gallery List  */
    data[0]?.data?.map(item => {
      
      /** media Icon Id from data.Included array */
      let media_image_id = data[0]?.included?.map((elm) => 
            elm.id === item.relationships.field_yw_gallery_icon.data.id 
            && elm.relationships.field_media_image.data.id);

      /** fetch Image URL from Drupal Media JSON DATA **
       * Condition - media_image_id === included.id */      
      let media_data = media[0]?.included?.find(md => md.id === media_image_id[0]);
      let media_url = media_data.attributes.uri.url;
      console.log("MEDIA URL",media_url)


      /** PUSH Drupal JSON data in to simple 'Data' Array */
      return arr.push({
        "id": item.id,
        "field_yw_gallery_icon_id": media_image_id[0],
        "icon": media_url,
        "title": item.attributes.title,
        "url": item.attributes.field_yw_gallery_list_url.uri, 
        "urlInternal": item.attributes.field_yw_gallery_list_url.uri.includes("internal:/"),
        "text": "",
        "weight": item.attributes.weight
      })
    });
    
    /** Set newly created array into glData state with sorting  */
    setGlData(arr.sort(function(a,b){return a.weight > b.weight}));

  },[])




  return <GalleryContainer data={glData} />  
}

export default GalleryLocal
