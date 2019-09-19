# Framework  Angular 6.0  CRUD

Framework  Angular 2.0 para desenvolvimento de sistemas de backooffice

# GRID

## JS
```
var vm = new ViewModel({
    
      filterResult: [
        { nome: 'teste', id: 10 },
        { nome: 'teste', id: 11 },
        { nome: 'teste', id: 12 },
        { nome: 'teste', id: 13 },
        { nome: 'teste', id: 14 },
        { nome: 'teste', id: 15 },
        { nome: 'teste', id: 16 },
        { nome: 'teste', id: 17 },
        { nome: 'teste', id: 18 },
      ],
 
      grid: [
        { key: 'nome', info: { label: 'valor1', type: "string" } },
        { key: 'id', info: { label: 'codigo', type: "int" } }
      ],
 
    });
```
## HTML

```
<make-grid [(vm)]="vm" [checkboxProperty]="'id'" [showDelete]="false" [showEdit]="false" [showAction]="false" [showCheckbox]="true" [showDetails]="false" [showPrint]="false" (edit)="onEdit($event)"></make-grid>
```

# TAG 

## Permite utilizar uma string separada por virgulas como tags

## JS
```
var model = "valor1,valor2,valor3"

```
## HTML
```
<tag-custom [ngModel] ="model" (tagChange)="model=$event"></tag-custom>
```

### DEPENDECY

```
npm install ngx-chips@1.5.9
service.base.ts 

```

### MODULE
```
import { TagInputModule } from 'ngx-chips';

@NgModule({
    imports: [
    
        TagInputModule,
        
    ]]
})
```

### GERADOR

```
TableInfo = new UniqueListTableInfo
{

   new TableInfo { TableName = "Sample", MakeDomain = true, MakeApp = true, MakeDto = true, MakeCrud = true, MakeApi= true, MakeSummary = true , MakeFront= true , FieldsConfig = new List<FieldConfig> {

       new FieldConfig {
	   Name ="tags",
	   Tags = true
       }
   } },
   new TableInfo { TableName = "SampleType", MakeDomain = true, MakeApp = true, MakeDto = true, MakeCrud = true, MakeApi= true, MakeSummary = true , MakeFront= true},
   new TableInfo { TableName = "ManySampleType", MakeDomain = true, MakeApp = true, MakeDto = true, MakeCrud = true, MakeApi= true, MakeSummary = true , MakeFront= true}

}

```

## multiselect-funnel
## Componente que permite fazer uma pré seleção de itens de uma lista , seleciona-los e separa-los em uma segunda lista.

## C# API Core (CONTROLLER MORE)
```
        [HttpGet]
        public async Task<IActionResult> Get([FromQuery]DescricaoComponenteFilter filters)
        {
            var result = new HttpResult<dynamic>(this._logger);
            try
            {
                if (filters.FilterBehavior == FilterBehavior.GetDataItem)
                {
                    var searchResult = await this._rep.GetDataItem(filters);
                    return result.ReturnCustomResponse(searchResult, filters);
                }

                throw new InvalidOperationException("invalid FilterBehavior");

            }
            catch (Exception ex)
            {
                return result.ReturnCustomException(ex,"Seed - DescricaoComponente", filters, new ErrorMapCustom());
            }
        }

```
## C# API 4.5 (CONTROLLER PRINCIPAL)
```
	[ActionName("GetDataItem")]
        public async Task<HttpResponseMessage> GetDataItem([FromUri]sampleTypeFilter filters)
        {
            var result = new HttpResult<object>();

            try
            {
                var token = HelperAuth.GetHeaderToken();
                this.app = new PC_BannerApp(token);
                var data = await this.app.GetDataItem(filters);
                this.app.Dispose();
                result.Warnings = await this.app.GetDomainWarning(filters);
                result.Success(data);
                return Request.CreateResponse(result.StatusCode, result);

            }
            catch (Exception ex)
            {
                result.ReturnCustomException(ex, filters);
                return Request.CreateResponse(result.StatusCode, result);
            }

        }

```
## JS
```
var vm = {
others: "",
collectionSampleType : [
		{typeId : 1},
		{typeId : 2}
	]
}
```
## HTML

- [dataitem]="'SampleType'" -- Nome do Recurso na API (Controller com Metodod getDataItem Implementado).
- [ctrlName]="'collectionSampleType'" -- Nome da propriedade da vm onde sera adicionado os dados selecionados.
- [vm]="vm" -- model da tela que consome o componete e que sera usada para o post.
- [ctrlNameItem]="'typeId'" -- nome do campo do item da collection collectionSampleType.
- [fieldFilterName]="'name'" -- Campo usado para fazer o filtro do itens.

```
<multiselect-funnel [dataitem]="'SampleType'" [ctrlName]="'collectionSampleType'" [vm]="vm" [ctrlNameItem]="'typeId'" [fieldFilterName]="'name'"></multiselect-funnel>
```

### upload


## HTML

- [ctrlName]="'foto'" -- Nome da propriedade da vm onde sera adicionado o nome do arquivo.
- [vm]="vm" -- model da tela que consome o componete e que sera usada para o post.
- [label]="vm.infos.foto.label" -- label
- [folder]="'sample'" -- diretório onde a o arquivo sera upado

```
<upload-custom [(vm)]='vm' [ctrlName]='"foto"' [label]='vm.infos.foto.label' [folder]='"sample"'></upload-custom>
```

## GERADOR
```
TableInfo = new UniqueListTableInfo
{

                   new TableInfo { TableName = "Sample", MakeDomain = true, MakeApp = true, MakeDto = true, MakeCrud = true, MakeApi= true, MakeSummary = true , MakeFront= true  },
                   new TableInfo { TableName = "SampleType", MakeDomain = true, MakeApp = true, MakeDto = true, MakeCrud = true, MakeApi= true, MakeSummary = true , MakeFront= true,FieldsConfig = new List<FieldConfig> {

                       new FieldConfig {
                       Name ="foto",
                       Upload = true,
                       List = false,
                       }
                   } },
                   new TableInfo { TableName = "ManySampleType", MakeDomain = true, MakeApp = true, MakeDto = true, MakeCrud = true, MakeApi= true, MakeSummary = true , MakeFront= true}
}
		
```

## Multiselect

## HTML

- [dataitem]="'SampleType'" -- Nome do Recurso na API (Controller com Metodod getDataItem Implementado).
- [ctrlName]="'collectionManySampleType'" -- Nome da propriedade da vm onde sera adicionado os dados selecionados.
- [vm]="vm" -- model da tela que consome o componete e que sera usada para o post.
- [ctrlNameItem]="'sampleTypeId'" -- nome do campo do item da collection collectionSampleType.
- [fieldFilterName]="'name'" -- Campo usado para fazer o filtro do itens.
- [type]="'save or filter'" -- defeine como a model sera construida


```
//Para Save
vm.model.collectionManySampleType :[{sampleTypeId: "1"}, {sampleTypeId: "6"}]
//Para Filter
vm.modelFilter.collectionManySampleType :[1,6]
```

```
div class="row">
  <section class="col-md-12">
    <div class='form-group'>
      <label>{{ vm.infos.collectionManySampleType.label }}</label>
      <multiselect name='collectionManySampleType' [vm]="vm" [dataitem]="'SampleType'" [fieldFilterName]="'Name'" [ctrlName]="'collectionManySampleType'" [ctrlNameItem]="'sampleTypeId'" [type]="'save'"></multiselect>
    </div>
  </section>
</div>
```

### Nestabale

## HTML
```
 <nestable-tree [data]="showOrder.nestableData" [id]="content-nestable"
                      (change)="onChangeNestabale($event)"></nestable-tree>
```
## ts Data
```
this.showOrder.nestableData = result.dataList.map((item) => {
            return {
              id: item.contentId,
              name: item.title,
              dataAditional: item
            }
});

```

## Ts Event
onChangeNestabale(e: any) {

    this.itemOrded = e.map((item, i) => {
      let objRetorno: any = {};
      objRetorno.order = i + 1;
      return objRetorno;
    })

}
