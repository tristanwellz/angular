<?php
//Let's pretend this is a backend php service call.
//Select * from stock_end_of_day_data where date = '05-05-2016' and stock_index='NASDAQ';

$path = 'NASDAQ_20160505.csv';
if (($handle = @fopen($path, "r")) !== FALSE) {
  while (($data = fgetcsv($handle, 1000, ",")) !== FALSE) {
    $num = count($data);
    if ($data[6] > 150000) {
      $data_to_save[] = array(
        'date' => $data[1],
        'symbol' => $data[0],
        'open' => $data[2],
        'close' => $data[5],
        'lo' => $data[4],
        'hi' => $data[3],
        'vl' => $data[6],
      );
    }
  }
  fclose($handle);
}
echo json_encode($data_to_save);
