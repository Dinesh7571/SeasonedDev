import { format } from "https://deno.land/std@0.83.0/datetime/mod.ts";

format(new Date(2019, 0, 20), "dd-MM-yyyy"); // output : "20-01-2019"
format(new Date(2019, 0, 20), "yyyy-MM-dd"); // output : "2019-01-20"
format(new Date(2019, 0, 20), "dd.MM.yyyy"); // output : "2019-01-20"
format(new Date(2019, 0, 20, 16, 34), "MM-dd-yyyy HH:mm"); // output : "01-20-2019 16:34"
format(new Date(2019, 0, 20, 16, 34), "MM-dd-yyyy hh:mm a"); // output : "01-20-2019 04:34 PM"
format(new Date(2019, 0, 20, 16, 34), "HH:mm MM-dd-yyyy"); // output : "16:34 01-20-2019"
format(new Date(2019, 0, 20, 16, 34, 23, 123), "MM-dd-yyyy HH:mm:ss.SSS"); // output : "01-20-2019 16:34:23.123"
format(new Date(2019, 0, 20), "'today:' yyyy-MM-dd"); // output : "today: 2019-01-20"