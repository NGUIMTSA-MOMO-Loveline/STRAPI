from random import randint
import class_armes
import class_inventaire
import class_joueur
import class_monstre
import class_potions
import Foctions_options
import Fonction_combats
import Fonction_Menu
   

Fonction_Menu.Menu()
choice = int(input())

if choice != 4:
    if choice == 1:
        print("veuillez créér votre joueur")
        print("choisissez la class de votre joueur")
        print("1. Warrior")
        print("2. Mage")
        print("3. Archer")
        joueur_class = int(input())
        while joueur_class < 1 or joueur_class > 3:
            print("error")
            joueur_class = int(input())
        print("Donnez un nom à votre joueur")
        Nom_joueur = input()
        if joueur_class == 1:
            P1 = class_joueur.Player("Warrior",Nom_joueur)
        elif joueur_class == 2:
            P1 = class_joueur.Player("Mage",Nom_joueur)
        elif joueur_class == 3:
            P1 = class_joueur.Player("Archer",Nom_joueur)
        print("Stats")
        print("Nom_joueur :",P1.Name)
        print("Class :",P1.player_class)
        if P1.player_class == "Mage" :
            print("Type :",P1.Type)
        print("PV :",P1.health)
        print("Strength :",P1.strength)
        print("Niveau :",P1.Niveau)
        print("XP :", str(P1.XP) + "/" + str(P1.max_XP), "            Zen :", P1.Zen)
        print("Le jeu commence")
        print("Vous vous reveillez dans une foret")
        print("Un sentier se dresse devant vous")
        print("1. Avancer")
        print("2. Options")
        Actions = input()
        while Actions != '1' and Actions != '2' and Actions != '0':
            print("1. Avancer")
            print("2. Options")
            Actions = input()
        while Actions == '2' :
            print("1. Inventaire")
            print("2. Stats")
            print("3. Retour")
            Actions = input()
            while Actions !='1' and Actions != '2' and Actions != '3':
                print("1. Inventaire")
                print("2. Stats")
                print("3. Retour")
                Actions = input()
            while Actions == '1' :
                print("1. Armes")
                print("2. Potions")
                print("0. Retour")
                Invent = input()
                while Invent !='1' and Invent !='0' and Invent != '2' :
                    print("1. Armes")
                    print("2. Potions")
                    print("0. Retour")
                    Invent = input()
                while Invent =='1' :
                    class_inventaire.Inventory.Open_inventory_Armes(P1)
                    print("0. Retour")
                    retour = input()
                    while retour !='0' and retour !='1':
                        class_inventaire.Inventory.Open_inventory_Armes(P1)
                        print("0. Retour")
                        retour = input()
                    if retour != '0' :
                        class_inventaire.Inventory.Use_Armes(P1,P1,retour)
                    else :
                        print("1. Armes")
                        print("2. Potions")
                        print("0. Retour")
                        Invent = input()
                        
                        
                
                while Invent =='2' :
                    class_inventaire.Inventory.Open_inventory_Potions(P1)
                    print("0. Retour")
                    retour = input()
                    while retour !='0' and retour !='1':
                        class_inventaire.Inventory.Open_inventory_Potions(P1)
                        print("0. Retour")
                        retour = input()
                    if retour != '0' :
                        class_inventaire.Inventory.Use_Potions(P1,P1,retour)
                    else :
                        print("1. Armes")
                        print("2. Potions")
                        print("0. Retour")
                        Invent = input()
                    
                if Invent == '0' :
                    print("1. Inventaire")
                    print("2. Stats")
                    print("3. Retour")
                    Actions = input()
                    while Actions !='1' and Actions != '2'  and Actions != '3':
                        print("1. Inventaire")
                        print("2. Stats")
                        print("3. Retour")
                        Actions = input()

            while Actions == '2' :
                print("Nom :",P1.Name)
                print("Class :",P1.player_class)
                if P1.player_class == "Mage":
                    print("Type :",P1.Type)
                print("PV :",P1.health)
                print("Strength :",P1.strength)
                print("Niveau :",P1.Niveau)
                print("XP :", str(P1.XP) + "/" + str(P1.max_XP), "            Zen :", P1.Zen)
                print("0. Retour")
                retour = input()
                while retour !='0':
                    print("0. Retour")
                    retour = input()
                if retour == '0' :
                    print("1. Inventaire")
                    print("2. Stats")
                    print("3. Retour")
                    Actions = input()

            while Actions == '3' :
                print("1. Avancer")
                print("2. Options")
                Actions = input()
        
        
        
        if Actions == '1':
            print("vous arrivez a une intersection.Appuyez  sur '2' pour aller à droite ou '3' pour aller à gauche ou sur '4' pour reculer ou sur '5' pour ouvrir les options")
            Direction=input()
        while Direction !='2' and Direction !='3' and Direction !='4'and Direction !='0' and Direction != '5':
            print("vous arrivez a une intersection.Appuyez  sur '2' pour aller à droite ou '3' pour aller à gauche ou sur '4' pour reculer ou sur '5' pour ouvrir les options")
            Direction = input()
        while Direction =='4':
            print("Vous etes revenu a votre point de départ .Vous devez avancer .Appuyer sur '1'pour avancer ou sur '2' pour ouvrir les options")
            Actions = input()
            while Actions !='1' and Actions != '2':
                print("1. Avancer")
                print("2. Options")
                Actions = input()
            if Actions == '2' :
                Foctions_options.Options(P1)
            print("vous arrivez a une intersection.Appuyez  sur '2' pour aller à droite ou '3' pour aller à gauche ou sur '4' pour reculer sur '5' pour ouvrir les options")
            Direction=input()
        while Direction=='5':
              print("1. Inventaire")
              print("2. Stats")
              print("3. Retour")
              Actions = input()
              while Actions !='1' and Actions != '2' and Actions != '3':
                  print("1. Inventaire")
                  print("2. Stats")
                  print("3. Retour")
                  Actions = input()
              while Actions == '1' :
                print("1. Armes")
                print("2. Potions")
                print("0. Retour")
                Invent = input()
                while Invent !='1' and Invent !='0' and Invent != '2' :
                    print("1. Armes")
                    print("2. Potions")
                    print("0. Retour")
                    Invent = input()
                while Invent =='1' :
                    class_inventaire.Inventory.Open_inventory_Armes(P1)
                    print("0. Retour")
                    retour = input()
                    while retour !='0' and retour !='1':
                        class_inventaire.Inventory.Open_inventory_Armes(P1)
                        print("0. Retour")
                        retour = input()
                    if retour != '0' :
                        class_inventaire.Inventory.Use_Armes(P1,P1,retour)
                    else :
                        print("1. Armes")
                        print("2. Potions")
                        print("0. Retour")
                        Invent = input()
                        
                        
                
                while Invent =='2' :
                    class_inventaire.Inventory.Open_inventory_Potions(P1)
                    print("0. Retour")
                    retour = input()
                    while retour !='0' and retour !='1':
                        class_inventaire.Inventory.Open_inventory_Potions(P1)
                        print("0. Retour")
                        retour = input()
                    if retour != '0' :
                        class_inventaire.Inventory.Use_Potions(P1,P1,retour)
                    else :
                        print("1. Armes")
                        print("2. Potions")
                        print("0. Retour")
                        Invent = input()
                    
                if Invent == '0' :
                    print("1. Inventaire")
                    print("2. Stats")
                    print("3. Retour")
                    Actions = input()
                    while Actions !='1' and Actions != '2'  and Actions != '3':
                        print("1. Inventaire")
                        print("2. Stats")
                        print("3. Retour")
                        Actions = input()
                          
              if Actions == '2' :
                  print("Nom :",P1.Name)
                  print("Class :",P1.player_class)
                  if P1.player_class == "Mage":
                      print("Type :",P1.Type)
                      print("PV :",P1.health)
                      print("Strength :",P1.strength)
                      print("Niveau :",P1.Niveau)
                      print("XP :", str(P1.XP) + "/" + str(P1.max_XP), "            Zen :", P1.Zen)
                      print("0. Retour")
                  retour = input()
                  while retour !='0':
                      print("0. Retour")
                      retour = input()
                  if retour == '0' :
                      print("1. Inventaire")
                      print("2. Stats")
                      print("3. Retour")
                      Actions = input()
                      while Actions !='1' and Actions != '2'  and Actions != '3':
                          print("1. Inventaire")
                          print("2. Stats")
                          print("3. Retour")
                          Actions = input()
              print("vous arrivez a une intersection.Appuyez  sur '2' pour aller à droite ou '3' pour aller à gauche ou sur '4' pour reculer sur '5' pour ouvrir les options")
              Direction=input()
              while Direction !='2' and Direction !='3' and Direction !='4' and Direction != '5':
                  print("vous arrivez a une intersection.Appuyez  sur '2' pour aller à droite ou '3' pour aller à gauche ou sur '4' pour reculer ou sur '5' pour ouvrir les options")
                  Direction=input()
              while Direction =='4':
                  print("Vous etes revenu a votre point de départ .Vous devez avancer .Appuyer sur '1'pour avancer ou sur '2' pour ouvrir les options")
                  Direction=input()
                  while Direction !='1' and Direction != '2':
                      print("1. Avancer")
                      print("2. Options")
                      Direction=input()
                  while Direction == '2' :
                      Foctions_options.Options(P1)
                      print("1. Avancer")
                      print("2. Options")
                      Direction=input()
                  print("vous arrivez a une intersection.Appuyez  sur '2' pour aller à droite ou '3' pour aller à gauche ou sur '4' pour reculer sur '5' pour ouvrir les options")
                  Direction=input()
              
        if Direction=='2':
              print("vous avez emprunter la voie de droite.A Quelque metre,vous tomber sur un monstre ")
        elif Direction=='3':
              print("vous avez emprunter la voie de Gauche.A Quelque metre,vous tomber sur un monstre ")
              
        M1 = class_monstre.Monsters("Gruk", 200, 20,1)   
        
        print("Nom:",M1.Name)
        print("HP:",M1.HP)
        print("Strength:",M1.strength)
        print("level:",M1.level)

        print("Le combat est engagé")
        print("Voici votre liste d'attaques")
        print("1.",P1.Atk1.Name_attacks)
        print("2.",P1.Atk2.Name_attacks)
        print("3.",P1.Atk3.Name_attacks)
        print("4. 0ptions")
        print("0. Abandonner le combat")
        print("Choississez une attaque")
        Fonction_combats.Combats(M1, P1)
        if M1.HP <= 0:
            print("+150XP")
            print("+12000 Zen")
            print("Potion de soin x4")
            print("Escalibure")
            print("cette arme ne peut etre utilisé que durant un seul combat et après elle disparaitra de votre inventaire")
            print("cette arme augmentera toutes vos capacités de 40points")
            P1.inventory.Armes.append(class_armes.Sword)
            class_inventaire.Equipements.append(" ")
            P1.XP = P1.XP + 150
            P1.Zen = P1.Zen + 12000
            P1.inventory.Potions.append(class_potions.Potion_de_soin)
        print("la voie s'est libérer, vous pouvez Avancer.")
        print("1. Avancer")
        print("2. Options")
        Actions = input()
        while Actions == '2':
            Foctions_options.Options(P1)
            print("1. Avancer")
            print("2. Options")
            Actions = input()
              
        if Actions == '1' :
            print("Vous arrivez à une autre intersections.")
            print("1. Avancer")
            print("2. A droite")
            print("3. A gauche")
            print("4. Options")
            Actions = input()
            if Actions == '4' :
                Foctions_options.Options()
                print("1. Avancer")
                print("2. A droite")
                print("3. A gauche")
                print("4. Options")
                Actions = input()
            if Actions == '1' :
                print("Vous avez emprunter la voie droit devant vous. vous tombez sur un montres")
                M2 = class_monstre.Monsters("Vaine", 300, 50, 2)
                print("Nom :",M2.Name)
                print("HP :",M2.HP)
                print("Strength :",M2.strength)
                print("Level :",M2.level)
                  
                print("Le combat est engagé")
                print("1.",P1.Atk1.Name_attacks)
                print("2.",P1.Atk2.Name_attacks)
                print("3.",P1.Atk3.Name_attacks)
                print("4. 0ptions")
                print("0. Abandonner le combat")
                print("Choississez une attaque")
                Fonction_combats.Combats(M2, P1)
                if M2.HP <= 0:
                    print("+420XP")
                    print("+20000 Zen")
                    print("Potion Dopper x2")
                    P1.XP = P1.XP + 420
                    P1.Zen = P1.Zen + 20000
                    P1.inventory.Potions.append(class_potions.Potion_Dopper)
                    
                
            if Actions == '2' :
                print("Vous avez emprunter la voie droit devant vous. vous tombez sur un montres")
                M2 = class_monstre.Monsters("Vaine", 300, 50, 2)
                print("Nom :",M2.Name)
                print("HP :",M2.HP)
                print("Strength :",M2.strength)
                print("Level :",M2.level)
                  
                print("Le combat est engagé")
                print("1.",P1.Atk1.Name_attacks)
                print("2.",P1.Atk2.Name_attacks)
                print("3.",P1.Atk3.Name_attacks)
                print("4. 0ptions")
                print("0. Abandonner le combat")
                print("Choississez une attaque")
                Fonction_combats.Combats(M2, P1)
                if M2.HP <= 0:
                    print("+420XP")
                    print("+20000 Zen")
                    print("Potion Dopper x2")
                    P1.XP = P1.XP + 420
                    P1.Zen = P1.Zen + 20000
                    P1.inventory.Potions.append(class_potions.Potion_Dopper)
                    
                    
            if Actions == '3' :
                print("Vous avez emprunter la voie droit devant vous. vous tombez sur un montres")
                M2 = class_monstre.Monsters("Vaine", 300, 50, 2)
                print("Nom :",M2.Name)
                print("HP :",M2.HP)
                print("Strength :",M2.strength)
                print("Level :",M2.level)
                  
                print("Le combat est engagé")
                print("1.",P1.Atk1.Name_attacks)
                print("2.",P1.Atk2.Name_attacks)
                print("3.",P1.Atk3.Name_attacks)
                print("4. 0ptions")
                print("0. Abandonner le combat")
                print("Choississez une attaque")
                Fonction_combats.Combats(M2, P1)
                if M1.HP <= 0:
                    print("+420XP")
                    print("+20000 Zen")
                    print("Potion Dopper x2")
                    P1.XP = P1.XP + 420
                    P1.Zen = P1.Zen + 20000
                    P1.inventory.Potions.append(class_potions.Potion_Dopper)
            
            if P1.XP >= P1.max_XP :
                print("Niv",P1.Niveau,"=> Niv 2")
                P1.Niveau = P1.Niveau + 1
                print("Gain de Niveau")
                print("Strength +5")
                print("Health +100")
                print("Defense +5")
                print("Agility +5")
                print("Vous avez atteint le niveau 2 félicitation")
                print("l'emplacement du boss à été reveller.")
                print("le boss se trouve a l'est de votre position.")
                print("A la prochaine intersection, tournez à droite")
                P1.strength = P1.strength + 5
                P1.health = P1.health + 100
                P1.defense = P1.defense + 5
                P1.agility = P1.agility + 5
                P1.XP = P1.XP - P1.max_XP
                P1.max_XP = P1.max_XP + 200
                print("Le monstre vaincue, la voie a été libérer.")
                print("1. Avancer")
                print("2. Options")
                Actions = input()
                while Actions == '2':
                    Foctions_options.Options(P1)
                    print("1. Avancer")
                    print("2. Options")
                    Actions = input()
                if Actions == '1' :
                    print("Vous arrivez a une intersection.")
                    print("1. A droite (Boss)")
                    print("2. A gauche")
                    print("3. Options")
                    Actions = input()
                    while Actions == '3' :
                        Foctions_options.Options(P1)
                        print("1. A droite (Boss)")
                        print("2. A gauche")
                        print("3. Options")
                        print("0. Menu prinpale")
                        Actions = input()
                    if Actions == '1' :
                        Boss_Lycaon = class_monstre.Monsters("Lycaon", 800, 170, 5)
                        print("Vous êtes dans la salle du boss")
                        print("le boss apparait")
                        print("Nom :",Boss_Lycaon.Name)
                        print("HP :",Boss_Lycaon.HP)
                        print("Strength :",Boss_Lycaon.strength)
                        print("Level :",Boss_Lycaon.level)
                              
                        print("Le combat est engagé")
                        print("1.",P1.Atk1.Name_attacks)
                        print("2.",P1.Atk2.Name_attacks)
                        print("3.",P1.Atk3.Name_attacks)
                        print("4. 0ptions")
                        print("0. Abandonner le combat")
                        print("Choississez une attaque")
                        Fonction_combats.Combats(Boss_Lycaon, P1)
                        if Boss_Lycaon.HP <= 0:
                            print("+5000XP")
                            print("+50000 Zen")
                            print("Potion Dopper x2")
                            P1.XP = P1.XP + 5000
                            P1.Zen = P1.Zen + 200000
                            P1.inventory.Potions.append(class_potions.Potion_Dopper)
                            if P1.XP >= P1.max_XP :
                                print("Niv",P1.Niveau,"=> Niv 5")
                                P1.Niveau = + 3
                                print("Gain de Niveau")
                                print("Strength +15")
                                print("Health +500")
                                print("Defense +15")
                                print("Agility +15")
                                P1.strength = P1.strength + 15
                                P1.health = P1.health + 500
                                P1.defense = P1.defense + 15
                                P1.agility = P1.agility + 15
                                P1.XP = P1.XP - P1.max_XP
                                P1.max_XP = P1.max_XP + 2000
                    
                    if Actions == '2' :
                        print("Vous avez emprunter la voie de gauche. vous tombez sur un montres")
                        M3 = class_monstre.Monsters("Vaine", 400, 60, 3)
                        print("Nom :",M3.Name)
                        print("HP :",M3.HP)
                        print("Strength :",M3.strength)
                        print("Level :",M3.level)
                          
                        print("Le combat est engagé")
                        print("1.",P1.Atk1.Name_attacks)
                        print("2.",P1.Atk2.Name_attacks)
                        print("3.",P1.Atk3.Name_attacks)
                        print("4. 0ptions")
                        print("0. Abandonner le combat")
                        print("Choississez une attaque")
                        Fonction_combats.Combats(M3, P1)
                        if M3.HP <= 0:
                            print("+450XP")
                            print("+20000 Zen")
                            print("Potion Dopper x2")
                            P1.XP = P1.XP + 450
                            P1.Zen = P1.Zen + 20000
                            if P1.XP >= P1.max_XP :
                                print("Niv",P1.Niveau,"=> Niv 3")
                                P1.Niveau = P1.Niveau + 1
                                print("Gain de Niveau")
                                print("Strength +5")
                                print("Health +100")
                                print("Defense +5")
                                print("Agility +5")
                                P1.strength = P1.strength + 5
                                P1.health = P1.health + 100
                                P1.defense = P1.defense + 5
                                P1.agility = P1.agility + 5
                                P1.XP = P1.XP - P1.max_XP
                                P1.max_XP = P1.max_XP + 250
                        print("la voie a été libérer.")
                        print("1. Avancer")
                        print("2. Options")
                        Actions = input()
                        while Actions == '2':
                            Foctions_options.Options(P1)
                            print("1. Avancer")
                            print("2. Options")
                            Actions = input()
                        if Actions == '1' :
                            print("Vous arrivez dans un virage vers la droite et vous tournez a droite")
                            print("Vous apercevez un portail dans lequel vous entrez")
                            print("Vous voila soudainement dans la salle du boss")
                            Boss_Lycaon = class_monstre.Monsters("Lycaon", 800, 170, 5)
                            print("le boss apparait")
                            print("Nom :",Boss_Lycaon.Name)
                            print("HP :",Boss_Lycaon.HP)
                            print("Strength :",Boss_Lycaon.strength)
                            print("Level :",Boss_Lycaon.level)
                                  
                            print("Le combat est engagé")
                            print("1.",P1.Atk1.Name_attacks)
                            print("2.",P1.Atk2.Name_attacks)
                            print("3.",P1.Atk3.Name_attacks)
                            print("4. 0ptions")
                            print("0. Abandonner le combat")
                            print("Choississez une attaque")
                            Fonction_combats.Combats(Boss_Lycaon, P1)
                            if Boss_Lycaon.HP <= 0:
                                print("+5000XP")
                                print("+50000 Zen")
                                print("Potion Dopper x2")
                                P1.XP = P1.XP + 5000
                                P1.Zen = P1.Zen + 200000
                                P1.inventory.Potions.append(Potion_Dopper)
                                if P1.XP >= P1.max_XP :
                                    print("Niv",P1.Niveau,"=> Niv 6")
                                    P1.Niveau = + 3
                                    print("Gain de Niveau")
                                    print("Strength +15")
                                    print("Health +500")
                                    print("Defense +15")
                                    print("Agility +15")
                                    P1.strength = P1.strength + 15
                                    P1.health = P1.health + 500
                                    P1.defense = P1.defense + 15
                                    P1.agility = P1.agility + 15
                                    P1.XP = P1.XP - P1.max_XP
                                    P1.max_XP = P1.max_XP + 2000
                            
                            
                            
                            
                                
                              
                  
            
              
              
        
        
        
        
    
    
    