

/** Client Details */
export const clientDetailData = (clientId, client) => {
    //console.log(clientId);
    let index = client && client?.data?.findIndex((item) => 
    item.relationships.field_client_id.data.id === clientId);
    let arr = [];
    const {
      title,
      field_client_s_name,
      field_client_s_address_line_1,
      field_client_s_address_line_2,
      field_client_s_tel,
      field_client_s_email,
      field_client_s_contact_person
    } = index && client?.data[index]?.attributes;
    arr.push({
      "client_id": clientId,
      "client_title" : title,
      "client_name" : field_client_s_name,
      "client_add_line_1": field_client_s_address_line_1,
      "client_add_line_2": field_client_s_address_line_2,
      "client_tel" : field_client_s_tel,
      "client_email": field_client_s_email,
      "client_contact_person": field_client_s_contact_person
  })
  return arr;
}