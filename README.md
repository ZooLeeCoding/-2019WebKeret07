0. Lépések indításhoz:

    npm install
    ng serve

Tesztelés:
Chrome Fejlesztői eszközök (Ctrl+Shift+i)

1. Új elemek bevonása:
material.module.ts

        MatSidenavModule,
        MatToolbarModule,
        MatListModule

bevonása a többi modulhoz hasonlóan

2. Két új komponenst generálok a két navigációs sáv
megvalósításához

ng generate component -m app Header

ng generate component -m app SidenavList

3. app.component.ts bővítése ViewChild-dal

4. app.component.html átírása

5. Header komponens elkészítése
- kell egy Output attribútum, a sidenavToggle emitter
- a html templatet pedig úgy kell megírni,
hogy kezelje és felismerje a különböző képernyőméreteket

6. A Material ikonok használatához az index.html-ben be kell vonnunk az icon készletet, a <head> tagek között
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">

7. fxLayout paraméterekkel egészítetjük ki a header.component.html-t, hogy különböző kijelzőméretek esetén más elemek legyenek megjelenítve és elrejtve belőle

8. Feltöltjük tartalommal a SidenavListComponent-et is

9. A header.component.css-be pótoltuk a css módosításokat

Önálló feladat:
- mindkét navigációs komponensbe kerüljön be a main
komponens is (egy tetszőleges mat-icon-nal, amit az órán még nem használtunk)
- a main komponensen a my-second csak xs-nél nagyobb kijelzőkön jelenjen meg
- ha md-nél nagyobb a kijelzőméret a my-firszt-ön jelenjen meg egy <h2> header is NAGY VAGYOK felirattal