type Tennismainmenu =   {
  "type": string,
  "id": string,
  "attributes": {
    "description": string,
    "enabled": boolean,
    "expanded": boolean,
    "menu_name": string,
    "meta": {
      "entity_id": string
    },
    "options": [
      
    ],
    "parent": string,
    "provider": string,
    "route": {
      "name": string,
      "parameters": [
        
      ]
    },
    "title": string,
    "url": string,
    "weight": number
  }
}

type Homepagedata =  {
  "type": string,
  "id": string,
  "links": {
    "self": {
      "href": string
    }
  },
  "attributes": {
    "drupal_internal__nid": number,
    "drupal_internal__vid": number,
    "langcode": string,
    "revision_timestamp": string,
    "revision_log": null,
    "status": boolean,
    "title": string,
    "created": string,
    "changed": string,
    "promote": boolean,
    "sticky": boolean,
    "default_langcode": boolean,
    "revision_translation_affected": null,
    "path": {
      "alias": null,
      "pid": null,
      "langcode": string
    },
    "body": {
      "value": string
      "format": string,
      "processed": string,
      "summary": string
    }
  },
  "relationships": {
    "node_type": {
      "data": {
        "type": string,
        "id": string,
        "meta": {
          string
        }
      },
      "links": {
        "related": {
          "href": string
        },
        "self": {
          "href": string
        }
      }
    },
    "revision_uid": {
      "data": {
        "type": string,
        "id": string,
        "meta": {
          "drupal_internal__target_id": number
        }
      },
      "links": {
        "related": {
          "href": string
        },
        "self": {
          "href": string
        }
      }
    },
    "uid": {
      "data": {
        "type": string,
        "id": string,
        "meta": {
          "drupal_internal__target_id": number
        }
      },
      "links": {
        "related": {
          "href": string
        },
        "self": {
          "href": string
        }
      }
    },
    "field_media_image": {
      "data": {
        "type": string,
        "id": string,
        "meta": {
          "drupal_internal__target_id": number
        }
      },
      "links": {
        "related": {
          "href": string
        },
        "self": {
          "href": string
        }
      }
    }
  }
}


type Aboutpagedata =  {
  "type": string,
  "id": string,
  "links": {
    "self": {
      "href": string
    }
  },
  "attributes": {
    "drupal_internal__nid": number,
    "drupal_internal__vid": number,
    "langcode": string,
    "revision_timestamp": string,
    "revision_log": null,
    "status": boolean,
    "title": string,
    "created": string,
    "changed": string,
    "promote": boolean,
    "sticky": boolean,
    "default_langcode": boolean,
    "revision_translation_affected": null,
    "path": {
      "alias": null,
      "pid": null,
      "langcode": string
    },
    "body": {
      "value": string
      "format": string,
      "processed": string,
      "summary": string
    }
  },
  "relationships": {
    "node_type": {
      "data": {
        "type": string,
        "id": string,
        "meta": {
          string
        }
      },
      "links": {
        "related": {
          "href": string
        },
        "self": {
          "href": string
        }
      }
    },
    "revision_uid": {
      "data": {
        "type": string,
        "id": string,
        "meta": {
          "drupal_internal__target_id": number
        }
      },
      "links": {
        "related": {
          "href": string
        },
        "self": {
          "href": string
        }
      }
    },
    "uid": {
      "data": {
        "type": string,
        "id": string,
        "meta": {
          "drupal_internal__target_id": number
        }
      },
      "links": {
        "related": {
          "href": string
        },
        "self": {
          "href": string
        }
      }
    },
    "field_media_image": {
      "data": {
        "type": string,
        "id": string,
        "meta": {
          "drupal_internal__target_id": number
        }
      },
      "links": {
        "related": {
          "href": string
        },
        "self": {
          "href": string
        }
      }
    }
  }
}

type CourseData =  {
  "type": string,
  "id": string,
  "links": {
    "self": {
      "href": string
    }
  },
  "attributes": {
    "drupal_internal__nid": number,
    "drupal_internal__vid": number,
    "langcode": string,
    "revision_timestamp": string,
    "revision_log": null,
    "status": boolean,
    "title": string,
    "created": string,
    "changed": string,
    "promote": boolean,
    "sticky": boolean,
    "default_langcode": boolean,
    "revision_translation_affected": boolean,
    "path": {
      "alias": null,
      "pid": null,
      "langcode": string
    },
    "body": {
      "value": string,
      "format": string,
      "processed": string,
      "summary": string
    },
    "field_course_calendar": {
      "value": string,
      "end_value": string
    },
    "field_time_from_to": string
  },
  "relationships": {
    "node_type": {
      "data": {
        "type": string,
        "id": string,
        "meta": {
          "drupal_internal__target_id": string
        }
      },
      "links": {
        "related": {
          "href": string
        },
        "self": {
          "href": string
        }
      }
    },
    "revision_uid": {
      "data": {
        "type": string,
        "id": string,
        "meta": {
          "drupal_internal__target_id": number
        }
      },
      "links": {
        "related": {
          "href": string
        },
        "self": {
          "href": string
        }
      }
    },
    "uid": {
      "data": {
        "type": string,
        "id": string,
        "meta": {
          "drupal_internal__target_id": number
        }
      },
      "links": {
        "related": {
          "href": string
        },
        "self": {
          "href": string
        }
      }
    },
    "field_course_type": {
      "data": {
        "type": string,
        "id": string,
        "meta": {
          "drupal_internal__target_id": number
        }
      },
      "links": {
        "related": {
          "href": string
        },
        "self": {
          "href": string
        }
      }
    },
    "field_media_image": {
      "data": null,
      "links": {
        "related": {
          "href": string
        },
        "self": {
          "href": string
        }
      }
    },
    "field_venue": {
      "data": {
        "type": string,
        "id": string,
        "meta": {
          "drupal_internal__target_id": number
        }
      },
      "links": {
        "related": {
          "href": string
        },
        "self": {
          "href": string
        }
      }
    }
  }
}

type CourseInclude =  {
  "type": string,
  "id": string,
  "links": {
    "self": {
      "href": string
    }
  },
  "attributes": {
    "drupal_internal__tid": number,
    "drupal_internal__revision_id": number,
    "langcode": string,
    "revision_created": string,
    "revision_log_message": null,
    "status": boolean,
    "name": string,
    "description": null,
    "weight": number,
    "changed": string,
    "default_langcode": boolean,
    "revision_translation_affected": boolean,
    "path": {
      "alias": null,
      "pid": null,
      "langcode": string
    }
  },
  "relationships": {
    "vid": {
      "data": {
        "type": string,
        "id": string,
        "meta": {
          "drupal_internal__target_id": string
        }
      },
      "links": {
        "related": {
          "href": string
        },
        "self": {
          "href": string
        }
      }
    },
    "revision_user": {
      "data": null,
      "links": {
        "related": {
          "href": string
        },
        "self": {
          "href": string
        }
      }
    },
    "parent": {
      "data": [
        {
          "type": string,
          "id": string,
          "meta": {
            "links": {
              "help": {
                "href": string,
                "meta": {
                  "about": string
                }
              }
            }
          }
        }
      ],
      "links": {
        "related": {
          "href": string
        },
        "self": {
          "href": string
        }
      }
    }
  }
}