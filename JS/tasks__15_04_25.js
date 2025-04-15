{
    // //Задание 4.1
    // //Рассчитать значение у при заданном значении х:
    // //sin^2(x) при x>0,
    // //1-2*sin(x^2) в противном случае

    // var x,y;

    // x = parseInt(prompt("Введите число: "));
    // if(x>0){
    //     y = Math.pow(Math.sin(x),2);
    //     alert("f(x) = sin^2(x) = "+y+"(в радианах)");
    // }
    // else{
    //     y = 1 - (2*(Math.sin(Math.pow(x,2))));
    //     alert("f(x) = 1-2*sin(x^2) = "+y+"(в радианах)");
    // }
}



{
    // //Задание 4.58
    // //Дано трехзначное число. Определить:
    // //а) входят ли в него цифры 4 или 7;
    // //б) входят ли в него цифры 3, 6 или 9.
    // var number = parseInt(prompt("Введите трёхзначное число: ")),
    // consumable,
    // AFlag=false, BFlag=false;

    // while(number>0){
    //     consumable = number%10;
    //     if(consumable==4 || consumable==7)AFlag = true;
            
    //     if(consumable==3 || consumable==6 || consumable==9)BFlag =true;
            
    //     number = Math.floor(number/10);
    // }

    // if(AFlag == true){
    //     alert("a) В вашем числе имеется цифра 4 или 7!");
    // }
    // else{
    //     alert("a) Цифра 4 или 7 не найдена!");
    // }

    // if(BFlag == true){
    //     alert("б) В вашем числе имеется цифра 3 или 6 или 9!");
    // }
    // else{
    //     alert("б) Цифра 3 или 6 или 9 не найдена!");
    // }
}

{
    // //Задание 5.27. 
    // //Найти:
    // //а) сумму всех целых чисел от 100 до 500;
    // //б) сумму всех целых чисел от a до 500 (значение a вводится с клавиатуры;a <= 500);
    // //в) сумму всех целых чисел от –10 до b (значение b вводится с клавиатуры;b >= –10);
    // //г) сумму всех целых чисел от a до b (значения a и b вводятся с клавиатуры; b >= a).

    // var a,b,
    // sumOfA=0,
    // sumOfB=0,
    // sumOfC=0,
    // sumOfG=0;
    // //a
    // for(var c = 100;c<=500;c++){
    //     if(c%2==0){
    //         sumOfA+=c;
    //     }
    // }
    // alert("а) сумма всех целых чисел от 100 до 500 = "+sumOfA);

    // //б
    // a = parseInt(prompt("Введите число А<=500: "));
    // for(a ; a <= 500 ; a++){
    //     if(a % 2 == 0){
    //         sumOfB += a;
    //     }
    // }
    // alert("б) сумма всех целых чисел от a до 500 = "+sumOfB);

    // //в
    // b = parseInt(prompt("Введите число B>=-10: "));
    // for(var c = -10;c<=b;c++){
    //     if(c%2==0){
    //         sumOfC+=c;
    //     }
    // }
    // alert("в) сумма всех целых чисел от –10 до b = "+sumOfC);

    // //г
    // a = parseInt(prompt("Введите число А<=B: "));
    // b = parseInt(prompt("Введите число B>=A: "));
    // b = parseInt(prompt("Введите число B>=-10: "));
    // for(a;a<=b;a++){
    //     if(a%2==0){
    //         sumOfG+=a;
    //     }
    // }
    // alert("г) сумму всех целых чисел от a до b = "+sumOfG);
}

{
    // //Задание 5.23. Вывести "столбиком" следующие числа: 2,1, 2,2, 2,3, ..., 2,8.
    // for(var a =2.1; a<=2.9;a+=0.1)
    // {
    //     console.log(a);
    // }
}

{
    //6.22. Дано натуральное число. Определить:
    //а) количество цифр 3 в нем;
    //б) сколько раз в нем встречается последняя цифра;
    //в) количество четных цифр в нем. Составное условие и более одного неполного условного оператора не использовать;
    var number = parseInt(prompt("Введите натуральное число: ")),
    cloneNumber,
    lastNumber=number%10;
    counterA=0,counterLast=0,counterEven=0;

    while(number>0){
        cloneNumber = number%10;
        if(cloneNumber==3){
            counterA++;
        }
        if(cloneNumber == lastNumber){
            counterLast++;
        }
        if(cloneNumber%2==0){
            counterEven++;
        }
        number = Math.floor(number/10);
    }
    alert("а) количество цифр 3 = "+counterA+"\nб) сколько раз в нем встречается последняя цифра = "+counterLast+"\nв) количество четных цифр в нем = "+counterEven);
}