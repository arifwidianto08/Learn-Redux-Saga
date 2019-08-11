export function firestoreCollection(querySnapshot) {
  let data = [];
  querySnapshot.forEach(function(doc) {
    // doc.data() is never undefined for query doc snapshots
    data.push({ ...doc.data(), id: doc.id });
  });
  return { status: 200, data };
}

export function firestoreDocument(doc) {
  if (doc.exists) {
    return {
      status: 200,
      data: {
        ...doc.data(),
        id: doc.id
      }
    };
  } else {
    return {
      status: 404,
      data: null
    };
  }
}
