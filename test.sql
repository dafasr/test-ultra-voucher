SELECT
 tn.id,
 tn.name,
 tn2.name AS parent_name
FROM
  tabel_nama AS tn
LEFT JOIN
  tabel_nama AS tn2 ON tn.parent_id = tn2.id;