void setup() {
int data = 0;
double temp = 0.0;
double alt = 0.0;
double batt_volt = 0.0;
double light[] = {0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0};
double solar_voltage = 0.0;
double solar_current = 0.0;
double batt_current = 0.0;
String gps = "";

}

void loop() {

  batt_volt = analogRead(0);
  delay(10);
  solar_voltage = analogRead(1);
  delay(10);
  batt_current = analogRead(2);
  delay(10);
  
  
  
  for (int x=3; x <= 15; x++){
    light[x-3] = analogRead(x);
    delay(10);
  }
 
}
