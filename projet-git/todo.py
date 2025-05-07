print("1. creer un todo")
print("2. Liste des todos")
print("3.statut")
print("4.modifier le statut d un todo")
print("0. Quitter")



List_todos=[]
list_statut=[]
def creer_un_todos():
   titre= input( "inserer le nom du todos:" ) 
   List_todos.append(titre)
   list_statut.append("a faire")


choix = int(input())

while choix != 0:
  if choix == 1:
    creer_un_todos()
    print("1. creer un todo")
    print("2. Liste des todos")
    print("3.statut")
    print("4.modifier le statut d un todo")
    print("0. Quitter")
    choix = int(input())
  elif choix == 2 :
    if len(List_todos)<1:
      print("il n'y a pas de todos")
      print("1. creer un todo")
      print("2. Liste des todos")
      print("3.statut")
      print("4.modifier le statut d un todo")
      print("0. Quitter")
      choix = int(input())
    else :
      print(List_todos)
      print("1. creer un todo")
      print("2. Liste des todos")
      print("3.statut")
      print("4.modifier le statut d un todo")
      print("0. Quitter")
      choix = int(input())
  elif choix ==3 :
    if len(List_todos)<1:
      print("il n'y a pas de todos")
      print("1. creer un todo")
      print("2. Liste des todos")
      print("3.statut")
      print("4.modifier le statut d un todo")
      print("0. Quitter")
      choix = int(input())
    else :
      x=0
      i = 0
      while  x  <  len(List_todos) :
        print (i,List_todos[x], "=>",list_statut[x])
        x=x+1
        i=i+1
        
      print("1. creer un todo")
      print("2. Liste des todos")
      print("3.statut")
      print("4.modifier le statut d un todo")
      print("0. Quitter")
      choix = int(input())
  else :
     if len(List_todos)<1:
      print("il n'y a pas de todos")
      print("1. creer un todo")
      print("2. Liste des todos")
      print("3.statut")
      print("4.modifier le statut d un todo")
      print("0. Quitter")
      choix = int(input())
     else :
      x=0
      i = 0
      while  x  <  len(List_todos) :
        print (i,List_todos[x], "=>",list_statut[x])
        x=x+1
        i=i+1

      print("quel todos voulez vous modifier le statut :")
      modif=int(input())
      if list_statut[modif]=="a faire":
          list_statut[modif]="fait"
      elif list_statut[modif]=="fait":
          list_statut[modif]="a fair"
      
      x=0
      i = 0
      while  x  <  len(List_todos) :
        print (i,List_todos[x], "=>",list_statut[x])
        x=x+1
        i=i+1 
      print("1. creer un todo")
      print("2. Liste des todos")
      print("3.statut")
      print("4.modifier le statut d un todo")
      print("0. Quitter")
      choix = int(input())

      def delet_todo():
        confirmation = input(f"voulez vous supprimer le todo '{List_todos[i]['title']}' ? (y/n):")
        if confirmation.lower() == 'y':
            del List_todos[i]
            print("Todo suupprimer")
        else :
            print("suppression annuler")    