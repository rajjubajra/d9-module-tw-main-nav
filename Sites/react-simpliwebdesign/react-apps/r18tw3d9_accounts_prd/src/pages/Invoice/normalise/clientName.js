


    /** View Client's name only */
export const clientName = (clientId, client) => {
    let index = client?.data?.findIndex((item)=> item.relationships.field_client_id.data.id === clientId);
      return client?.data[index].attributes.field_client_s_name;
  }
